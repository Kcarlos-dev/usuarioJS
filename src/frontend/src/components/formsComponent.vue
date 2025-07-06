<template>
    <main v-if="exibir" class="d-flex position-fixed container justify-content-center">
        <section class="bg-dark d-flex flex-column rounded-2 tela p-2">
            <h2 class="text-light text-center m-2">O que você quer alterar?</h2>
            <div style="overflow-y: auto;">
                <div  class="d-flex flex-column justify-content-center align-items-center h-auto">
                    <button @click="btnImg" class="w-100 btn btn-primary">Imagem</button>
                    <imgComponent :exibir="exibirImg" :id="id"></imgComponent>
    
                    <button @click="btnNome" class="w-100 btn btn-primary my-2">Nome/Idade</button>
                    <NomeComponent :exibir="exibirNome" :id="id"></NomeComponent>
    
                    <button @click="btnBio" class="w-100 btn btn-primary">Bio</button>
                    <BioComponent :exibir="exibirBio" :id="id"></BioComponent>
    
                    <button @click="btnEndereco" class="w-100 btn btn-primary my-2">Endereço</button>
                    <EndercoComponent :exibir="exibirEndereco" :id="id"></EndercoComponent>
                    <br>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <button @click="btnFechar" class="btn btn-danger m-2">Fechar</button>
            </div>
        </section>
    </main>
</template>
<script>
import imgComponent from '@/components/FormsUpdate/ImgComponent.vue'
import NomeComponent from '@/components/FormsUpdate/NomeComponent.vue'
import BioComponent from '@/components/FormsUpdate/BioComponent.vue'
import EndercoComponent from '@/components/FormsUpdate/EnderecoComponent .vue'
export default {
    data() {
        return {
            exibirImg:false,
            exibirNome:false,
            exibirBio:false,
            exibirEndereco:false
            
        }
    },
    components:{
        imgComponent,
        NomeComponent,
        BioComponent,
        EndercoComponent
    },
    emits: ['EmitFechar'],
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
        btnFechar() {
            this.$emit('EmitFechar', this.exibir)
        },
        btnImg(){
            this.exibirImg = !this.exibirImg
        },
        btnNome(){
            this.exibirNome = !this.exibirNome
        },
        btnBio(){
            this.exibirBio = !this.exibirBio
        },
        btnEndereco(){
            this.exibirEndereco = !this.exibirEndereco 
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