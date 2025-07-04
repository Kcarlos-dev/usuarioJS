const db = require("../config/db")
const User = require("../models/User")
const CriarUser = (req, res) => {
    try {
        const { nome, img, idade, biografia, endereco } = req.body
        if (endereco.trim().length <= 0 ||
            typeof nome !== 'string' || nome.trim().length <= 0 ||
            typeof img !== 'string' || img.trim().length <= 0 ||
            !idade || isNaN(idade) || idade.length <= 0 ||
            typeof biografia !== 'string' || biografia.trim().length <= 0) {
            return res.status(400).json({ message: "Falta de dados ou dados invalidos" })
        }

        db.then(sequelize => {
            const user = User(sequelize)

            const create = user.create({ nome: nome, img: "/teste", idade: idade, biografia: biografia, endereco: endereco })
            create.then(() => {
                return res.status(201).json({ message: "Usuario criado com sucesso" })
            }).catch(({ parent }) => {
                return res.status(500).json({ message: "Erro no server", erro: parent.sqlMessage })
            })
        })
    } catch (error) {
        return res.status(500).json({ message: "Erro no server" })
    }
}

const ImgUser = async (req, res) => {
    const id = req.body.id

    if (!req.file) {
        return res.status(400).json({ error: 'Uma imagem é obrigatória' })
    }

    if (!id) {
        return res.status(400).json({ error: 'O ID é obrigatório' })
    }

    try {
        const sequelize = await db
        const user = User(sequelize)

        const idVerificado = await user.findOne({
            attributes: ['id'],
            where: { id }
        })

        if (!idVerificado) {
            return res.status(400).json({ message: "ID inválido" })
        }

        const imgPath = `/storage/img/${req.file.filename}`

        await user.update(
            { img: imgPath },
            { where: { id } }
        )

        return res.status(201).json({ message: "Foto do usuário cadastrada" })

    } catch (error) {
        console.error("Erro no ImgUser:", error)
        const sqlMsg = error.parent?.sqlMessage
        return res.status(500).json({ message: "Erro no servidor", erro: sqlMsg })
    }
}
const GetUser = async (req, res) => {
    const id = req.query.id
    const pagina = req.query.pagina || 1
    
    if(pagina < 1){
        pagina = 1
    }
    try {
        const sequelize = await db
        const user = User(sequelize)
        const pular = (pagina - 1) * 10

        let getUsers
        

        if (!id) {
            getUsers = await user.findAll({
                limit:10,
                offset:pular
            })
            return res.status(200).json({ message: "Usuarios registrados", data: getUsers })
        }
        getUsers = await user.findAll({
            where: {
                id: id
            }
        })
        if (!getUsers) {
            return res.status(400).json({ message: "Erro ao trazer usuarios" })
        }

        return res.status(200).json({ message: "Usuarios registrados:", data: getUsers })
    } catch (error) {
        console.error("Erro no ImgUser:", error)
        const sqlMsg = error.parent?.sqlMessage
        return res.status(500).json({ message: "Erro no servidor", erro: sqlMsg })
    }

}


module.exports = {
    CriarUser,
    ImgUser,
    GetUser
}