<template>
    <main v-if="exibir" class="w-100 p-2">
        <div class="my-2">
            <label class="text-light">Biografia:</label>
            <textarea v-model="biografia" style="resize: none;" class="form-control"></textarea>
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
    }
}
</script>