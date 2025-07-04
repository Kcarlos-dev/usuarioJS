const app = require("./app")
const userModel = require('./models/User')
const db = require('./config/db')

try {
  db.then((sequelize) => {
    userModel(sequelize)
    sequelize.sync()
  })
  app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/")
  })
}
catch (error) {
  console.error('Erro na inicialização:', error);
}

