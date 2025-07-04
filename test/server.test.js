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
describe("Servidor", () => {
    test("Deve responder na rota /", async () => {
        const res = await request.get("/")
        expect(res.statusCode).toBe(200)
    })
})

