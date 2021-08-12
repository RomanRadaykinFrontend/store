<template lang="pug">
.product
  .product__image( :style="imageStyle" )
    button.product__button.like(
      @click="isAddToFavour=!isAddToFavour"
      :class="activeAddButtonClass"
    )
      HeartEmptyLogo(v-show="!isAddToFavour")
      HeartColoredLogo(v-show="isAddToFavour")
  .product__description
    span {{ genderType }}
    span {{ fullProductName }}
  .product__control
    .product__price
      span.product__label ЦЕНА:
      span.product__sum {{ correctPrice }}
    button.product__button.add(
      @click="isDoneButtonClicked=!isDoneButtonClicked"
      :class="activeDoneButtonClass"
    )
      span(v-show="!isDoneButtonClicked") +
      DoneLogo(v-show="isDoneButtonClicked")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import DoneLogo from '@/common/assets/images/done.svg'
import HeartEmptyLogo from '@/common/assets/images/heart-empty.svg'
import HeartColoredLogo from '@/common/assets/images/heart-colored.svg'


@Component({
  components: {
    DoneLogo, HeartEmptyLogo, HeartColoredLogo,
  },
})
export default class Product extends Vue{
  @Prop() private imgRef!: string
  @Prop() private gender!: string
  @Prop() private price!: number

  private isDoneButtonClicked = false
  private isAddToFavour = false

  get imageStyle(){
    return {
      backgroundImage: 'url(' + require( `@/common/assets/images/sneakers/${this.imgRef}.png` ) + ')',
    }
  }

  get genderType(){
    switch( this.gender ){
    case 'male':
      return 'Мужские кроссовки'
    case 'female':
      return 'Женские кроссовки'
    default:
      return 'Кроссовки'
    }
  }

  get fullProductName(){
    const nameArr = this.imgRef.split( '_' )
    return nameArr.map( name => {
      const arr = name.split( '' )
      arr[0] = arr[0].toUpperCase()
      return arr.join( '' )
    }).join( ' ' )
  }

  get correctPrice(){
    return this.price.toLocaleString()
  }

  get activeDoneButtonClass(){
    return{
      ['active-done']: this.isDoneButtonClicked,
    }
  }
  get activeAddButtonClass(){
    return{
      ['active-add']: this.isAddToFavour,
    }
  }
}
</script>

<style scoped lang="sass">
.product
  width: 210px
  height: 260px
  display: flex
  flex-direction: column
  align-items: center
  border: 1px solid #F3F3F3
  border-radius: 40px
  margin-top: 40px

  >div
    width: 170px

  &__description
    display: flex
    flex-direction: column
    margin-top: 15px
  &__image
    width: 133px
    height: 112px
    background-size: contain
    background-position: center
    background-repeat: no-repeat

  &__control
    width: 100%
    display: flex
    justify-content: space-between
    margin-top: 15px
  &__price
    display: flex
    flex-direction: column
    justify-content: space-between
  &__label
    font-weight: bolder
    font-size: 11px
    line-height: 13px
    color: #BDBDBD
  &__sum
    font-size: 14px
    line-height: 17px
    font-weight: bold
  &__button
    width: 32px
    height: 32px
    border: 1px solid #F2F2F2
    border-radius: 8px
    color: #D3D3D3
    background: white
    text-align: center
    padding: 0
    line-height: 0
    display: flex
    justify-content: center
    align-items: center
    &.add
      &.active-done
        background: linear-gradient(#89F09C, #3CC755)
    &.like
      margin-top: 15px
      &.active-add
        background: #FEF0F0


</style>
