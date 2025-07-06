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
            <button class="btn btn-success my-2">
                confirmar
            </button>
        </div>
    </main>
</template>
<script>
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
    }
}
</script>