<template lang="pug">
.banner-view
  .banner-view__description
    p Stan Smith
    p Forever!
    button.banner-view__button КУПИТЬ
  .banner-view__image
    img( src="@/common/assets/images/frog.png" )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'


@Component({
  components: {  },
})
export default class BannerView extends Vue {
}
</script>

<style lang="sass" scoped>

.banner-view
  display: flex
  border-radius: 20px
  background: #F4EFE9
  justify-content: space-between
  &__description
    width: 30%
    display: flex
    justify-content: center
    flex-direction: column
    padding-left: 70px
    box-sizing: border-box
    p
      font-weight: bold
      font-size: 38px
      line-height: 46px
      color: black
      &:first-child
        color: #8BB43C
  &__button
    background: #A5D364
    border-radius: 110px
    border: none
    padding: 15px
    color: white
    font-weight: bold
    font-size: 16px
    line-height: 19px
    width: 70%
    margin-top: 20px
  &__image
    width: 70%
    img
      width: 100%

</style>
