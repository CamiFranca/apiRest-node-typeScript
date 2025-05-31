import { Request, Response } from "express"
import { TReturnOfCreate } from "./typeCities"
import * as yup from "yup"
import { validation } from "../../shared/middlewares/Validations"
import { StatusCodes } from "http-status-codes"



export const createValidation = validation((getSchema) => ({
  body: getSchema<TReturnOfCreate>(yup.object().shape({
    nome: yup.string().strict().required().min(3),


  }))
}))



export const create = async (req: Request<{}, {}, TReturnOfCreate>, res: Response) => {
 

  return res.status(StatusCodes.CREATED).json(1)

}

