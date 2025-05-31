import { testeServer } from "../jest.setup";
import { SuperTest } from "supertest";
import { StatusCodes } from "http-status-codes";


describe("Testando na controler de cidades o endpoint de delete by id",() =>{

  it("testa se o status code de sucesso é ok", async () => {
     
    const res = await testeServer.delete("/cidades/1")

    console.log(res.statusCode)

     expect(res.statusCode).toEqual(StatusCodes.OK)


  })

  it("Testa se o id é do tipo number", async ()=>{

    const id = 1

    const res = await testeServer.delete(`/cidades/${id}`)
    expect(typeof id).toBe("number")
  })

  it("Tenta apagar um registro que não existe", async () => {

    const id = 99999

    const res = await testeServer.delete(`/cidades/${id}`)
    expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(res.body).toHaveProperty('errors.default')
  })

  it("Apaga um registro" , async () => {

    const res = await testeServer.post("/cidades").send({nome:"Recife"})
    expect(res.statusCode).toEqual(StatusCodes.CREATED)

    const resApagada = await testeServer.delete(`/cidades/${res.body}`).send()

    expect(resApagada.statusCode).toEqual(StatusCodes.OK)
    expect(resApagada.body).toHaveProperty( "message")
  })
})