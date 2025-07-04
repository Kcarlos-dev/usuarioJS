const app = require("../src/app")
const supertest = require("supertest")
const db = require('../src/config/db')
const request = supertest(app)

beforeAll(async () => {
    await db.then((res) => {
        res.sync({ force: true })
    })
})
afterAll(async () => {
    await db.then((res) => {
        res.close()
    })
});
describe("Cadastro de usuario", () => {
    test("Deve cadastrar um usuario com sucesso", () => {
        const user = {nome:"Carlos Souza",
                      img:"/exemplo/",
                      idade:18,
                      biografia:"Eu sou um cara simples"}

        return request.post("/api/user")
            .send(user)
            .then(res => {

                expect(res.statusCode).toEqual(201)
                expect(res.body.message).toEqual("Usuario criado com sucesso")

            }).catch(err => {
                throw err
            })
    })
})

