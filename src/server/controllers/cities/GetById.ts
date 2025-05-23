import { Request, Response } from "express"
import { TParamsGetById } from "./typeCities"
import * as yup from "yup"
import { validation } from "../../shared/middlewares/Validations"
import { StatusCodes } from "http-status-codes"



export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<TParamsGetById>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),


  }))
}))



export const getById = async (req: Request, res: Response) => {

  console.log(req.params)
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("não implementado")

}