<template lang="pug">
  .store-view
    BannerView
    ProductsListView(
      title = "Все кроссовки"
      :products="products"
      :is-loading="isDataLoading"
    )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BannerView from '@/views/BannerView.vue'
import ProductsListView from '@/views/ProductsListView.vue'
import { commonModule } from '@/store'

@Component({
  components: { BannerView, ProductsListView },
})
export default class StoreView extends Vue{
  get products(){
    return commonModule.getters.data
  }

  get isDataLoading(){
    return commonModule.getters.isDataLoading
  }

  private created(){
    commonModule.actions.getData()
  }
}
</script>

<style scoped lang="sass">
.store-view
  display: flex
  flex-direction: column
  padding: 60px
</style>
