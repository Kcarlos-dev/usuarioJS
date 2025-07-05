<template>
    <main>
        <section style="height:calc(100vh - 56px); " class="d-flex justify-content-center align-items-center">
            <div class="d-flex flex-column flex-md-row tela h-25 justify-content-center align-items-center">

                <RouterLink to="/usuario" class="btn bg-dark text-decoration-none text-light btnDev">Criar usuário
                </RouterLink>

                <RouterLink to="/consultar" class="btn bg-dark text-decoration-none text-light btnDev">Consultar usuário
                </RouterLink>
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

.btnDev {
    height: 10vh;
    box-sizing: border-box;
    width: 200px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}


@media(max-width: 700px) {
    .tela {
        width: 100vw;
    }

    .btnDev {
        margin-top: 10px;
    }

}
</style>