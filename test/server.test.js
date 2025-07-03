const app = require("../src/app")
const supertest = require("supertest")
const request = supertest(app)
const db = require("../src/config/db")


beforeAll(async () => {
  await db.initDb();
});

afterAll(async () => {
  await db.destroyDb(); 
});

describe("Servidor", () => {
    test("Deve responder na rota /", async () => {
        const res = await request.get("/")
        expect(res.statusCode).toBe(200)
    })
})

