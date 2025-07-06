<template>
    <main v-if="exibir" class="bg-light ">
        <section class="p-2">
            <div>
                <label>Imagem:</label>
                <input ref="fileInput" class="bg-dark text-light w-100 p-2 m-1 rounded-2" type="file" accept="image/*">
            </div>
            <div class="d-flex justify-content-end">
                <button @click="btnConfirmar" class="btn btn-success">
                    confirmar
                </button>
            </div>
        </section>
    </main>
</template>
<script>
import app from '@/app';
export default {
    data() {
        return {

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
            const fileInput = this.$refs.fileInput
            const file = fileInput.files[0]
            const data = {
                id: this.id,
                img: file
            }
            app.putApiImg(data)
            .then(res =>{
                if(!res.success){
                    return alert("Vc precisa cadastrar uma imagem")
                }
                alert(res.data.message)
                this.$refs.fileInput.value = ''
            })
        }
    }
}
</script>