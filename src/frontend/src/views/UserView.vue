<template>
    <main style="height:calc(100vh - 56px);" class="d-flex p-3 justify-content-center ">
        <alertComponent :msg="msg" :cor="cor" :exibir="exibir" />
        <div class="tela d-flex flex-column justify-content-center bg-dark p-3 rounded-5">
            <div class="d-flex justify-content-center">
                <img src="@/assets/icons/user.svg">
            </div>
            <div>
                <label class="text-light">Nome:</label>
                <input v-model="nome" class="form-control my-2 " type="text" placeholder="ex:. fulano da silva">
            </div>
            <div>
                <label class="text-light">idade:</label>
                <input v-model="idade" class="form-control " type="number" placeholder="ex:. 18">
            </div>
            <div class="my-2">
                <label class="text-light">Biografia:</label>
                <textarea v-model="biografia" style="resize: none;" class="form-control"></textarea>
            </div>
            <div class="d-flex p-2 my-3 bg-light rounded-2">
                <div>
                    <label>Rua:</label>
                    <input v-model="endereco.rua" class="form-control bg-dark text-light" type="text">
                </div>
                <div class="mx-2">
                    <label>Bairro:</label>
                    <input v-model="endereco.bairro" class="form-control bg-dark text-light" type="text">
                </div>
                <div>
                    <label>Estado:</label>
                    <input v-model="endereco.estado" class="form-control bg-dark text-light" type="text">
                </div>
            </div>
            <div class="d-flex justify-content-end my-1">
                <button @click="btnCadastrar" class="btn btn-success">Cadastrar</button>
            </div>
        </div>
    </main>
</template>

<script>
import alertComponent from '@/components/alertComponent.vue';
export default {
    components: {
        alertComponent
    },
    data() {
        return {
            msg: "",
            cor: "",
            exibir: false,
            nome: "",
            idade: 0,
            biografia: "",
            endereco: {
                rua: "",
                bairro: "",
                estado: ""
            }
        }
    },
    methods: {
        btnCadastrar() {
            this.cor = "alert-danger"
            
            if (this.nome.trim().length <= 0) {
                this.exibir = !this.exibir
                return this.msg = "O campo 'nome' precisa está preenchido"
            }
            if (this.idade <= 0) {
                this.exibir = !this.exibir
                return this.msg = "O campo 'idade' precisa está preenchido"
            }
            if (this.biografia.trim().length <= 0) {
                this.exibir = !this.exibir
                return this.msg = "O campo 'biografia' precisa está preenchido"
            }
            if (this.endereco.rua.trim().length <= 0) {
                this.exibir = !this.exibir
                 this.msg = "O campo 'rua' precisa está preenchido"
                 return
            }
            if (this.endereco.estado.trim().length <= 0) {
                this.exibir = !this.exibir
                return this.msg = "O campo 'estado' precisa está preenchido"
            }
            if (this.endereco.bairro.trim().length <= 0) {
                this.exibir = !this.exibir
                return this.msg = "O campo 'bairro' precisa está preenchido"
            }


        }
    },

}
</script>

<style>
.tela {
    width: 30vw
}

@media(max-width: 700px) {
    .tela {
        width: 100vw;
    }


}
</style>