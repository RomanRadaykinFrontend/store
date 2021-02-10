import { NothingState } from './index.js'
import { Actions } from 'vuex-smart-module'
import { NothingMutations } from '@/store/modules/nothing/mutations'
import { NothingGetters } from '@/store/modules/nothing/getters'



export class NothingActions extends Actions<
  NothingState,
  NothingGetters,
  NothingMutations,
  NothingActions
> {
  public async fetchNothing() {
    try {
      const res = await fetch('')
      const Nothing = await res.text()
      this.mutations.setNothing( Nothing )
    } catch ( e ) {
      console.error( e )
    }
  }
}
