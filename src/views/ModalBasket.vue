<template lang="pug">
  .modal-basket( :style="modalHeight" )
    .modal-basket__basket
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ModalBasket extends Vue{
  get modalHeight(){
    return {
      height: `${window.document.documentElement.scrollHeight}px`,
    }
  }
  private created(){
    console.log( window.document.documentElement.scrollHeight )
  }
}
</script>

<style scoped lang="sass">
.modal-basket
  width: 100%
  background: rgb(0, 0, 0, 0.6)
  position: absolute
  z-index: 2
  display: flex
  justify-content: flex-end

  &__basket
    width: 20%
    height: 100%


</style>
