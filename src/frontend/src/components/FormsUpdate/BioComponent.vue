<template>
    <main v-if="exibir" class="w-100 p-2">
        <div class="my-2">
            <label class="text-light">Biografia:</label>
            <textarea v-model="biografia" style="resize: none;" class="form-control"></textarea>
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
            biografia: "",
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
                biografia: this.biografia,
            }
            apiNode.putApiBio(obj)
                .then(res => {
                    console.log(res)
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