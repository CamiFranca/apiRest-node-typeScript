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

  if(Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: "Registro não encontrado"
    }
  })

  return res.status(StatusCodes.OK).json({message: "Deletado com sucesso"})

}
