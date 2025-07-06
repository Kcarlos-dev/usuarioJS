<template>
    <main v-if="exibir" class="bg-light ">
        <section class="p-2">
            <div >
                <label>Imagem:</label>
                <input class="bg-dark text-light w-100 p-2 m-1 rounded-2" type="file">
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-success">
                    confirmar
                </button>
            </div>
        </section>
    </main>
</template>
<script>
export default{
    props:{
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