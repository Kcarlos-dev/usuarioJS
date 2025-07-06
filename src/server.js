const app = require("./app")
const userModel = require('./models/User')
const db = require('./config/db')

try {
  db.then((sequelize) => {
    userModel(sequelize)
    sequelize.sync()
  })
  app.listen(3000,process.env.NODE_HOST, () => {
    console.log("Servidor rodando em: "+"http://"+process.env.NODE_HOST+":3000")
  })
}
catch (error) {
  console.error('Erro na inicialização:', error);
}

