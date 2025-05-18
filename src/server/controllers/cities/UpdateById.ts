import { Request, Response } from "express"
import { TParamsUpdate, TbodyUpdate } from "./typeCities"
import * as yup from "yup"
import { validation } from "../../shared/middlewares/Validations"
import { StatusCodes } from "http-status-codes"


export const updateValidation = validation((getSchema) => ({
  body: getSchema<TbodyUpdate>(yup.object().shape({
    nome: yup.string().required().min(3).strict(),


  })),
  params: getSchema<TParamsUpdate>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),

  }))

}))


export const update = async (req: Request, res: Response) => {

  console.log(req.body)
  console.log(req.params)

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("não implementado")
}