const CriarUser = (req, res) => {
    try {
        const { nome, img, idade, biografia } = req.body
        if (nome.trim().length <= 0
            || img.trim().length <= 0
            || idade.length <= 0
            || biografia.trim().length <= 0) {
            return res.status(400).json({ message: "Falta de dados ou dados invalidos" })
        }

        return res.status(201).json({ message: "Usuario criado com sucesso" })

    } catch (error) {
        return res.status(500).json({ message: "Erro no server" })
    }
}

module.exports = {
    CriarUser
}