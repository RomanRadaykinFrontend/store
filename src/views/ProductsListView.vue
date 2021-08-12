<template lang="pug">
  .products-list-view
    .products-list-view__header
      span.products-list-view__title {{ title }}
      .products-list-view__custom-input
        .products-list-view__search-image
        input.products-list-view__input( placeholder="Поиск..." )

    .products-list-view__products-container
      Product.products-list-view__product(
        v-show = " !isLoading "
        v-for = "prod in products"
        :img-ref = "prod.name"
        :key = "prod.name"
        :gender = "prod.gender"
        :price = "prod.price"
      )
      ProdLoadLogo.products-list-view__logo(
        v-show = " isLoading "
        v-for = "item in 10"
        :key="item"
      )
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Product from '@/components/Product.vue'
import ProdLoadLogo from '@/common/assets/images/prod-load.svg'
import { commonModule } from '@/store'

@Component({
  components: { Product, ProdLoadLogo },
})
export default class ProductsListView extends Vue{
  @Prop() private title!: string
  @Prop() private products!: Array<Product>
  @Prop() private isLoading!: boolean

}
</script>

<style scoped lang="sass">
.products-list-view
  display: flex
  flex-direction: column
  &__header
    display: flex
    justify-content: space-between
    align-items: center
  &__title
    font-weight: bold
    font-size: 32px
    line-height: 39px
    margin-top: 40px
  &__custom-input
    display: flex
    border: 1px solid #F3F3F3
    height: 45px
    align-self: center
    border-radius: 10px
    align-items: center
  &__search-image
    width: 15px
    height: 15px
    background: url("./../common/assets/images/search.png") no-repeat
    margin: 0 10px

  &__input
    outline: none
    border: none
    height: 100%
    font-size: 14px
    line-height: 17px
    &::placeholder
      color: #C4C4C4


  &__products-container
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr))
    grid-gap: 15px

  &__logo
    margin-top: 40px


</style>
