import { Request, Response } from "express"
import { TParamsDelete } from "./typeCities"
import * as yup from "yup"
import { validation } from "../../shared/middlewares/Validations"
import { StatusCodes } from "http-status-codes"



export const deleteValidation = validation((getSchema) => ({
  params: getSchema<TParamsDelete>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),


  }))
}))

export const deleteById = async (req: Request, res: Response) => {

  console.log(req.params)

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("não implementado")

}
