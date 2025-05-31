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
  if(Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: "Registro não encontrado"
    }
  })

  return res.status(StatusCodes.NO_CONTENT).send()
}