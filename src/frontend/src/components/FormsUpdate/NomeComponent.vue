<template>
    <main v-if="exibir" class="w-100 p-2">
        <div>
            <label class="text-light">Nome:</label>
            <input v-model="nome" class="form-control " type="text" placeholder="ex:. fulano da silva">
        </div>
        <div>
            <label class="text-light">idade:</label>
            <input v-model="idade" class="form-control " type="number" placeholder="ex:. 18">
        </div>
        <div class="d-flex justify-content-end">
            <button @click="btnConfirmar" class="btn btn-success my-2">
                confirmar
            </button>
        </div>
    </main>
</template>
<script>
import apiNode from '@/app'


export default {
    data() {
        return {
            nome: "",
            idade: null
        }
    },
    props: {
        exibir: {
            type: Boolean,
            default: false
        },
        id: {
            type: Number,
            default: null
        }
    },
    methods: {
        btnConfirmar() {
            const obj = {
                id: this.id,
                idade:this.idade,
                nome:this.nome
            }
            apiNode.putApiName(obj)
            .then(res => {
                console.log(res)
                if (res.success) {
                    this.nome = ""
                    this.idade = ""
                    return alert(res.data.message)
                } else {
                    return alert("Falha na alteração")
                }
            })
        }
    }
}
</script>