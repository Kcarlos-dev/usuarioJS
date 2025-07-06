<style scoped>
.sectionMobile {
    width: 50vw !important;
}

@media(max-width: 700px) {
    .sectionMobile {
        width: 100vw !important;
    }
}
</style>
<template>
    <main class="d-flex flex-column justify-content-center  align-items-center">
        <formsComponent @EmitFechar="val => exbir = !val" :exibir="exbir" :id="id"></formsComponent>
        <section style="height:calc(100vh - 60px); overflow-y: auto;" class="sectionMobile">
            <div class="d-flex   justify-content-center my-2" v-for="user in users" :key="user.id">
                <div class="w-50">
                    <h3>{{ "#" + user.id + " " + user.nome }}</h3>
                    <label>Idade: {{ user.idade }}</label>
                    <article>
                        {{ user.biografia }}
                    </article>
                    <div class="table-responsive">
                        <table v-show="!exbir" class="table table-striped table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Rua</th>
                                    <th scope="col">Bairro</th>
                                    <th scope="col">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{ JSON.parse(user.endereco).rua }}</td>
                                    <td>{{ JSON.parse(user.endereco).bairro }}</td>
                                    <td>{{ JSON.parse(user.endereco).estado }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="d-flex flex-column mx-2">
                    <img :src="'/'" @error="e => e.target.src = require('@/assets/icons/user.svg')" alt="Avatar">
                    <button @click="AlterarPerfil(user.id)" class="btn btn-success">Alterar perfil</button>
                </div>

            </div>

        </section>
    </main>
</template>
<script>
import formsComponent from '@/components/formsComponent.vue';
import app from '@/app';
export default {
    components: {
        formsComponent
    },
    data() {
        return {
            exbir: false,
            users: "",
            id: null,
        }
    },
    mounted() {
        app.getApiUsers()
            .then(({ data }) => {
                this.users = data.data
            })
    },
    methods: {
        AlterarPerfil(id) {
            this.id = id
            this.exbir = !this.exbir
        }
    }
}
</script>