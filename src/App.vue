<template lang="pug">
#app
  ModalBasket
  .app__container
    AppHeaderView
    router-view
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppHeaderView from '@/views/AppHeaderView.vue'
import ModalBasket from '@/views/ModalBasket.vue'

@Component({
  components: { AppHeaderView, ModalBasket },
})

export default class App extends Vue{

}
</script>
<style lang="sass">
@import common/assets/styles/reset
@import common/assets/styles/fonts
@import common/assets/styles/html

#app
  font-family: Inter, serif
  width: 100%
  background: #E7F6FF
  display: flex
  justify-content: center
  .app
    &__container
      margin: 85px 0
      width: 60%
      background: white
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04)
      border-radius: 20px

</style>
