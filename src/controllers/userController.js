const db = require("../config/db")
const User = require("../models/User")
const CriarUser = (req, res) => {
    try {
        const { nome, idade, biografia, endereco } = req.body
        if (endereco.trim().length <= 0 ||
            typeof nome !== 'string' || nome.trim().length <= 0 ||
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

    if (pagina < 1) {
        pagina = 1
    }
    try {
        const sequelize = await db
        const user = User(sequelize)
        const pular = (pagina - 1) * 10

        let getUsers


        if (!id) {
            getUsers = await user.findAll({
                limit: 10,
                offset: pular
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
        console.error("Erro no GetUser:", error)
        const sqlMsg = error.parent?.sqlMessage
        return res.status(500).json({ message: "Erro no servidor", erro: sqlMsg })
    }

}
const UpdateUser = async (req, res) => {
    const id = req.params.id
    try {
        const sequelize = await db
        const user = User(sequelize)
        const { nome, idade } = req.body
        if (!id) {
            return res.status(400).json({ error: 'O ID é obrigatório' })
        }
        if (
            typeof nome !== 'string' || nome.trim().length <= 0 ||
            !idade || isNaN(idade) || idade.length <= 0) {
            return res.status(400).json({ message: "Falta de dados ou dados invalidos" })
        }
        const userUp = user.update(
            {
                nome: nome,
                idade: idade
            },
            {
                where: {
                    id: id
                }
            }
        )
        if (!userUp) {
            return res.status(400).json({ message: "Erro ao atualizar usuario" })
        }
        return res.status(200).json({ message: "Usuarios atualizado" })

    } catch (error) {
        console.error("Erro no UpdateUser:", error)
        const sqlMsg = error.parent?.sqlMessage
        return res.status(500).json({ message: "Erro no servidor", erro: sqlMsg })
    }

}
const UpdateEnderco = async (req, res) => {
    const id = req.params.id
    try {
        const sequelize = await db
        const user = User(sequelize)
        const { endereco } = req.body
        if (!id) {
            return res.status(400).json({ error: 'O ID é obrigatório' })
        }
        if (endereco.trim().length <= 0) {
            return res.status(400).json({ message: "Falta de dados ou dados invalidos" })
        }
        const userUp = user.update(
            {
                endereco: endereco,
            },
            {
                where: {
                    id: id
                }
            }
        )
        if (!userUp) {
            return res.status(400).json({ message: "Erro ao atualizar endereço" })
        }
        return res.status(200).json({ message: "Endereço atualizado" })

    } catch (error) {
        console.error("Erro no UpdateEnderco:", error)
        const sqlMsg = error.parent?.sqlMessage
        return res.status(500).json({ message: "Erro no servidor", erro: sqlMsg })
    }

}
const UpdateBio = async (req, res) => {
    const id = req.params.id
    try {
        const sequelize = await db
        const user = User(sequelize)
        const { biografia } = req.body
        if (!id) {
            return res.status(400).json({ error: 'O ID é obrigatório' })
        }
        if (biografia.trim().length <= 0) {
            return res.status(400).json({ message: "Falta de dados ou dados invalidos" })
        }
        const userUp = user.update(
            {
                biografia: biografia,
            },
            {
                where: {
                    id: id
                }
            }
        )
        if (!userUp) {
            return res.status(400).json({ message: "Erro ao atualizar bio" })
        }
        return res.status(200).json({ message: "Bio atualizada" })

    } catch (error) {
        console.error("Erro no UpdateBio:", error)
        const sqlMsg = error.parent?.sqlMessage
        return res.status(500).json({ message: "Erro no servidor", erro: sqlMsg })
    }

}
const DeleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const sequelize = await db
        const user = User(sequelize)
        if (!id) {
            return res.status(400).json({ error: 'O ID é obrigatório' })
        }
        const delUser = user.destroy({
            where:{
                id:id
            }
        })
        if (!delUser) {
            return res.status(400).json({ message: "Erro ao deletar user" })
        }
        return res.status(200).json({ message: "User deletado com sucesso" })

    } catch (error) {
        console.error("Erro no DeleteUser:", error)
        const sqlMsg = error.parent?.sqlMessage
        return res.status(500).json({ message: "Erro no servidor", erro: sqlMsg })
    }

}

module.exports = {
    CriarUser,
    ImgUser,
    GetUser,
    UpdateUser,
    UpdateEnderco,
    UpdateBio,
    DeleteUser
}