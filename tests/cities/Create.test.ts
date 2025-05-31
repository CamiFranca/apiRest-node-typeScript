import { testeServer } from "../jest.setup"
import supertest from "supertest"
import { StatusCodes } from "http-status-codes"


describe(" testando na controler de cidades o método de create", () => {


  it("cria um registro ", async () => {

    const resposta = await testeServer.post("/cidades").send({ nome: "Recife" })


    expect(resposta.statusCode).toEqual(StatusCodes.CREATED)
    expect(typeof resposta.body).toEqual('number')


  })

  it("cria um registro com o nome menor que três caracteres.", async () => {

    const resposta = await testeServer.post("/cidades").send({ nome: "Re" })


    expect(resposta.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    expect(resposta.body).toHaveProperty('errors.body.nome')


  })
})