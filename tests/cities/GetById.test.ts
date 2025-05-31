import { testeServer } from "../jest.setup";
import { SuperTest } from "supertest";
import { StatusCodes } from "http-status-codes";

describe("Testando na controler de cidades o endpoint de get by id ", () =>{

it("Busca registro por Id", async () =>{

 
  const res = await testeServer.post('/cidades').send({nome: "Caixias do sul"})
  expect(res.statusCode).toEqual(StatusCodes.CREATED)
  
 
  const res1 = await testeServer.get(`/cidades/${res.body}`).send()
  expect(res1.statusCode).toEqual(StatusCodes.OK)
  expect(res1.body).toHaveProperty("nome")
})

  it("Tenta buscar por um registro que não existe", async () => {

    const id = 99999

    const res = await testeServer.get(`/cidades/${id}`)
    expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(res.body).toHaveProperty('errors.default')
  })



})