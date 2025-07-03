const app = require("../src/app")
const supertest = require("supertest")
const request = supertest(app)

describe("Servidor", () => {
    test("Deve responder na rota /", async () => {
        const res = await request.get("/")
        expect(res.statusCode).toBe(200)
    })
})

