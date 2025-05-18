// import { RequestHandler } from "express"
// import { StatusCodes } from "http-status-codes"
// import * as yup from "yup"



// type TProperty = "body" | "header" | "params" | "query"
// type TAllSchemas = Record<TProperty, yup.Schema<any>>
// type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler



// export const validation: TValidation = (schemas) => {

//   return async (req, res, next) => {


//     const errosResult: Record<string, Record<string, string>> = {}

//     Object.entries(schemas).forEach(([Key, schema]) => /** */

//       try {
//       schema.validateSync(req[key as TProperty], { abortEarly: false })
//       // return next()

//     } catch (error) {
//       const yupError = error as yup.ValidationError
//       const errors: Record<string, string> = {}

//       yupError.inner.forEach(error => {
//         if (error.path === undefined) return
//         errors[error.path] = error.message

//       })

//       errosResult[Key] = errors
//     } 
//     )
//   }
//   if (Object.entries(errosResult).length === 0) {
//     return next()
//   } else {
//     return res.status(StatusCodes.BAD_REQUEST).json({ errors: errosResult })
//   }
// }



import { RequestHandler } from "express"
import { StatusCodes } from "http-status-codes"
import * as yup from "yup"

type TProperty = "body" | "header" | "params" | "query"
type TAllSchemas = Record<TProperty, yup.Schema<any>>

type TGetSchema = <T>(schema: yup.Schema<T>) => yup.Schema<T>
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>
type TValidation = (getSchema: TGetAllSchemas) => RequestHandler


export const validation: TValidation = (GetAllSchemas) => {

  const schemas = GetAllSchemas((schema) => schema)

  return async (req, res, next) => {

    const errosResult: Record<string, Record<string, string>> = {}

    Object.entries(schemas).forEach(([Key, schema]) => {
      try {
        schema!.validateSync(req[Key as TProperty], { abortEarly: false })

      } catch (error) {
        const yupError = error as yup.ValidationError
        const errors: Record<string, string> = {}

        yupError.inner.forEach(error => {
          if (error.path === undefined) return
          errors[error.path] = error.message
        })

        errosResult[Key] = errors
      }
    })

    if (Object.entries(errosResult).length === 0) {
      return next()
    } else {
      return res.status(StatusCodes.BAD_REQUEST).json({ errors: errosResult })
    }
  }
}







