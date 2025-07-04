const db =  require("../config/db")
const User = require("../models/User")
const CriarUser = (req, res) => {
    try {
        const { nome, img, idade, biografia, endereco } = req.body
        if ( endereco.trim().length <= 0                         || 
             typeof nome !== 'string' || nome.trim().length <= 0 ||
             typeof img  !== 'string' || img.trim().length <= 0  ||
             !idade || isNaN(idade)   ||  idade.length <= 0      ||
             typeof biografia  !== 'string' || biografia.trim().length <= 0) {
            return res.status(400).json({ message: "Falta de dados ou dados invalidos" })
        }

        db.then(sequelize => {
           const user = User(sequelize)

           const create = user.create({nome:nome,img:"/teste",idade:idade,biografia:biografia,endereco:endereco})
            create.then(() => {
                return res.status(201).json({ message: "Usuario criado com sucesso" })
            }).catch(({parent}) =>{
                return res.status(500).json({ message: "Erro no server",erro:parent.sqlMessage})
            })
        })
    } catch (error) {
        return res.status(500).json({ message: "Erro no server" })
    }
}

module.exports = {
    CriarUser
}