<template lang="pug">
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EmptyNothing from '@/components/EmptyNothing.vue' // @ is an alias to /src
import { nothingModule } from '@/store/context'

@Component({
  components: {
    EmptyNothing,
  },
})
export default class Home extends Vue {

  get nothing() {
    return nothingModule.getters.Nothing
  }

  public created() {
    nothingModule.actions.fetchNothing()
  }

}
</script>
