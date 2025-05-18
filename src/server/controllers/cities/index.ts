import * as create from "./Create"
import * as getAll from "./GetAll"
import * as update from "./UpdateById"
import * as getById from "./GetById"
import * as deleteById from "./DeleteById"


export const CitiesController = {
  ...deleteById,
  ...update,
  ...create,
  ...getAll,
  ...getById,



}