<template>
    <main>
        <section style="height:calc(100vh - 56px); " class="d-flex justify-content-center align-items-center">
            <div class="d-flex flex-column flex-md-row tela h-25 justify-content-center align-items-center">
                <button class="btn bg-dark">
                   <RouterLink to="/usuario" class="text-decoration-none text-light ">Criar usuário</RouterLink>
                </button>
                <button class="btn bg-dark">
                  <RouterLink to="/consultar" class="text-decoration-none text-light ">Consultar usuário</RouterLink>
                </button>
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
    methods: {

    },

}
</script>
<style scoped>
.tela {
    width: 50vw
}

.tela button {
    height: 10vh;
    box-sizing: border-box;
    width: 200px;
    margin-left: 15px;
}


@media(max-width: 700px) {
    .tela {
        width: 100vw;
    }

    .tela button {
        margin-top: 10px;
    }

}
</style>