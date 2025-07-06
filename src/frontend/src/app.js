import axios from "axios";
const host = ''

function getHost() {
    return host
}

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
const putApiName = (data) => {
    if (data.nome.trim().length <= 0 || data.idade <= 0) {
        return Promise.resolve({ success: false, error: "Dados invalidos" })
    }

    return axios.put(`${host}/api/user/${data.id}`, data)
        .then(response => ({
            success: true,
            data: response.data
        }))
        .catch(error => ({
            success: false,
            error: error.response?.data || error.message
        }))

}
const putApiBio = (data) => {
    if (data.biografia.trim().length <= 0) {
        return Promise.resolve({ success: false, error: "Digite uma Bio" })
    }

    return axios.put(`${host}/api/user/bio/${data.id}`, data)
        .then(response => ({
            success: true,
            data: response.data
        }))
        .catch(error => ({
            success: false,
            error: error.response?.data || error.message
        }))

}
const putApiEndereco = (data) => {
    if (data.rua.trim().length <= 0 || data.bairro.trim().length <= 0 || data.estado.trim().length <= 0) {
        return Promise.resolve({ success: false, error: "Endereço invalido" })
    }
    const endereco = {
        endereco: JSON.stringify(data)
    }

    return axios.put(`${host}/api/user/endereco/${data.id}`, endereco)
        .then(response => ({
            success: true,
            data: response.data
        }))
        .catch(error => ({
            success: false,
            error: error.response?.data || error.message
        }))

}
const deleteApiUser = (data) => {
    return axios.delete(`${host}/api/user/${data.id}`)
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
    getHost,
    getApiUsers,
    postApiUser,
    putApiImg,
    putApiName,
    putApiBio,
    putApiEndereco,
    deleteApiUser
}