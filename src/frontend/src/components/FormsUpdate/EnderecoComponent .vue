<template>
    <main v-if="exibir" class=" bg-light w-100 p-2">
        <section class="d-flex ">
            <div>
                <label>Rua:</label>
                <input v-model="rua" class="form-control bg-dark text-light" type="text">
            </div>
            <div>
                <label>Bairro:</label>
                <input v-model="bairro" class="form-control bg-dark text-light" type="text">
            </div>
            <div>
                <label>Estado:</label>
                <input v-model="estado" class="form-control bg-dark text-light" type="text">
            </div>
        </section>
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
            rua: "",
            bairro: "",
            estado: "",
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
                id:this.id,
                rua: this.rua,
                bairro: this.bairro,
                estado: this.estado,
            }
            apiNode.putApiEndereco(obj)
                .then(res => {
                    if (res.success) {
                        this.biografia = ""
                        return alert(res.data.message)
                    } else {
                        console.log(res)
                        return alert("Falha na alteração")
                    }
                })
        }
    }
}
</script>