import { testeServer } from "../jest.setup";
import { SuperTest } from "supertest";
import { StatusCodes } from "http-status-codes";

describe("Testando na controler de cidades o endpoint de update by id ", () => {
 it("Edita um registro por Id", async () => {
  const res = await testeServer.post("/cidades").send({ nome: "Olinda" });
  expect(res.statusCode).toEqual(StatusCodes.CREATED);

  const res1 = await testeServer
    .put(`/cidades/${res.body}`) // ou res.body.id, se for um objeto
    .send({ nome: "Caxias do Sul" }); // <- CORRIGIDO
  console.log("POST body retorno:", res.body.id);
  expect(res1.statusCode).toEqual(StatusCodes.NO_CONTENT);
});

  it("Tenta atualizar um registro que não existe", async () => {
    const id = 99999;

    const res = await testeServer.delete(`/cidades/${id}`);
    expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res.body).toHaveProperty("errors.default");
  });
});
