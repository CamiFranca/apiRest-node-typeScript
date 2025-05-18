import { Router } from "express";
import { StatusCodes } from 'http-status-codes'
import { CitiesController } from "./../controllers"


const router = Router();


router.get('/', (req, res) => {

  return res.send("olá dev!")
})



router.post('/cidades', CitiesController.createValidation, CitiesController.create)
router.get('/cidades/:id', CitiesController.getByIdValidation, CitiesController.getById)
router.get('/cidades', CitiesController.gettAllValidation, CitiesController.getAll)
router.put('/cidades/:id', CitiesController.updateValidation, CitiesController.update)
router.delete('/cidades/:id', CitiesController.deleteValidation, CitiesController.deleteById)


export default router