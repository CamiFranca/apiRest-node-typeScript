import { Request, Response } from "express"
import { TQueryPropsGetAll } from "./typeCities"
import * as yup from "yup"
import { validation } from "../../shared/middlewares/Validations"
import { StatusCodes } from "http-status-codes"



export const gettAllValidation = validation((getSchema) => ({
  query: getSchema<TQueryPropsGetAll>(yup.object().shape({
    page: yup.number().notRequired().moreThan(0),
    limit: yup.number().notRequired().moreThan(0),
    filter: yup.string().notRequired(),
  }))
}))



export const getAll = async (req: Request<{}, {}, {}, TQueryPropsGetAll>, res: Response) => {

  console.log(req.query)
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("não implementado")

}
