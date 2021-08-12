<template lang="pug">
  .app-header-view
    .app-header-view__left-panel
      SneakerLogo
      .app-header-view__title
        span.app-header-view__header VUE SNEAKERS
        span.app-header-view__description Магазин лучших кроссовок
    .app-header-view__right-panel
      .app-header-view__basket
        BasketLogo.logo
        span 1200 руб.
      FavouriteLogo
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BasketLogo from '@/common/assets/images/basket.svg'
import FavouriteLogo from '@/common/assets/images/favourite.svg'
import SneakerLogo from '@/common/assets/images/sneaker-logo.svg'

@Component({
  components: {  BasketLogo, FavouriteLogo, SneakerLogo },
})
export default class AppHeaderView extends Vue {


}
</script>

<style lang="sass" scoped>
.app-header-view
  padding: 50px
  display: flex
  justify-content: space-between
  border-bottom: 1px solid #EAEAEA
  &__left-panel, &__right-panel
    display: flex
    align-items: center
  &__title
    display: flex
    flex-direction: column
    margin-left: 20px
  &__header
    font-weight: bold
    font-size: 20px
    line-height: 24px
  &__description
    font-weight: normal
    font-size: 14px
    line-height: 17px
  &__basket
    display: flex
    align-items: center
    margin-right: 30px
    .logo
      margin-right: 10px




</style>
