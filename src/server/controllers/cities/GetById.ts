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

  if(Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors : {
      default: 'Registro não encontrado'
    }
  })

  

  return res.status(StatusCodes.OK).json({
    id : req.params.id,
    nome: 'Caixias do Sul'
  })

}