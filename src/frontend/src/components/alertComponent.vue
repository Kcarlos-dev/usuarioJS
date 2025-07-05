<template>
    <div class="position-absolute" v-if="exibir">
        <div :class="`alert ${cor} alert-dismissible`" role="alert">
            <div>{{ msg }}</div> <button type="button" class="btn-close"
                data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    },
    cor: {
      type: String,
      default: 'alert-primary'
    },
    exibir: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style></style>