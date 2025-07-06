<template>
    <main v-if="exibir" class="d-flex position-fixed container justify-content-center">
        <section class="bg-dark d-flex flex-column rounded-2 tela p-2">
            
            <div class="">
                <button class="btn btn-danger">Fechar</button>
                <button class="btn btn-success m-2">Confirmar</button>
            </div>
        </section>
    </main>
</template>
<script>
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
    }
}

</script>
<style scoped>
.tela {
    height: 70vh;
    width: 30vw
}

@media(max-width: 700px) {
    .tela {
        width: 100vw;
    }
}
</style>