import { Getters } from 'vuex-smart-module'
import { NothingState } from '@/store/modules/nothing/index'

export class NothingGetters extends Getters<NothingState> {
  get Nothing() {
    return this.state.Nothing
  }
}
