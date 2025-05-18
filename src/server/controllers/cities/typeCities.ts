import { number } from "yup"



export type TReturnOfCreate = {
  nome: string

}

export type TQueryPropsGetAll = {
  page?: number | null,
  limit?: number | null,
  filter?: string | null
}

export type TParamsGetById = {
  id: number
}
export type TParamsUpdate = {
  id: number
}

export type TbodyUpdate = {
  nome: string
}

export type TParamsDelete = {
  id: number
}