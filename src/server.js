const app = require("./app")

(async () => {
    try {
        await db.initDb()
        app.listen(3000, () => {
            console.log("Servidor rodando em http://localhost:3000/")
        })
    } catch (err) {
        console.error("Falha ao inicializar o DB:", err)
        process.exit(1)
    }
})();
