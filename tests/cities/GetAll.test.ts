import { testeServer } from "../jest.setup";
import { SuperTest } from "supertest";
import { StatusCodes } from "http-status-codes";

describe("testando na controler de cidades o método de GetAll", ( ) => {


  it("Buscando todos os registros do DB", async () => {

    const res = await testeServer.post("/cidades").send({nome: "São Paulo"})
    expect(res.statusCode).toEqual(StatusCodes.CREATED)
    const res1 = await testeServer.post("/cidades").send({nome: "Natal"})
    expect(res1.statusCode).toEqual(StatusCodes.CREATED)

    const resBusca = await testeServer.get("/cidades").send()

    expect(resBusca.statusCode).toEqual(StatusCodes.OK)
    expect(resBusca.body.length).toBeGreaterThan(0)
    expect(Number(resBusca.header["x-total-count"])).toBeGreaterThan(0)
  })
})