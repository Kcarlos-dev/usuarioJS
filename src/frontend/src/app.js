import axios from "axios";
const host = ''

const getApiUsers = (data) => {
    if (!data) {
        return axios.get(`${host}/api/user`)
            .then(response => ({
                success: true,
                data: response.data
            }))
            .catch(error => ({
                success: false,
                error: error.response?.data || error.message
            }))
    }
    return axios.get(`${host}/api/user?id=${data.id}&pagina=${data.pag}`)
        .then(response => ({
            success: true,
            data: response.data
        }))
        .catch(error => ({
            success: false,
            error: error.response?.data || error.message
        }))

}

const postApiUser = (obj) => {

    if (obj.nome.trim().length <= 0) {
        return Promise.resolve({ success: false, error: "O campo 'nome' precisa estar preenchido" })
    }
    if (obj.idade <= 0) {
        return Promise.resolve({ success: false, error: "O campo 'idade' precisa estar preenchido" })
    }
    if (obj.biografia.trim().length <= 0) {
        return Promise.resolve({ success: false, error: "O campo 'biografia' precisa estar preenchido" })
    }
    if (obj.rua.trim().length <= 0) {
        return Promise.resolve({ success: false, error: "O campo 'rua' precisa estar preenchido" })
    }
    if (obj.estado.trim().length <= 0) {
        return Promise.resolve({ success: false, error: "O campo 'estado' precisa estar preenchido" })
    }
    if (obj.bairro.trim().length <= 0) {
        return Promise.resolve({ success: false, error: "O campo 'bairro' precisa estar preenchido" })
    }
    const endereco = JSON.stringify(
        {
            rua: obj.rua,
            bairro: obj.bairro,
            estado: obj.estado
        }
    )
    const data = {
        nome: obj.nome,
        idade: obj.idade,
        biografia: obj.biografia,
        endereco: endereco
    }
    return axios.post(`${host}/api/user`, data)
        .then(response => ({
            success: true,
            data: response.data
        })).catch(error => ({
            success: false,
            error: error.response?.data || error.message
        }))
}

const putApiImg = (data) => {
    const formData = new FormData()

    formData.append("id", data.id)
    formData.append("img", data.img)

    return axios.put(`${host}/api/user/img`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => ({
            success: true,
            data: response.data
        }))
        .catch(error => ({
            success: false,
            error: error.response?.data || error.message
        }))

}

export default {
    getApiUsers,
    postApiUser,
    putApiImg
}