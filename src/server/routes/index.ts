import {Router} from "express";
import {StatusCodes} from 'http-status-codes'
const router = Router ();


router.get('/', (req, res) => {

  return res.send("olá dev!")
})

router.post('/teste', (req, res) => {
  console.log(req.body.teste)
  return res.status(StatusCodes.ACCEPTED).send("testando")
})

export default router