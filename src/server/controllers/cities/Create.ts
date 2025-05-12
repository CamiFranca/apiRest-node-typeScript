import e, { Request, Response } from "express"
import { ReturnOfCreate } from "./typeCities"
import { StatusCodes } from "http-status-codes"
import * as yup from "yup"



const bodyValidation: yup.Schema<ReturnOfCreate> = yup.object().shape({

  nome: yup.string().required().min(3),
})



export const create = async (req: Request<{}, {}, ReturnOfCreate>, res: Response) => {


  let valedetedData: ReturnOfCreate | undefined = undefined

  try {

    valedetedData = await bodyValidation.validate(req.body)

  } catch (error) {
    const yupError = error as yup.ValidationError

    return res.json({
      errors: {
        default: yupError.message
      }
    })
  }


  console.log(valedetedData)


  return res.send(valedetedData)
}

