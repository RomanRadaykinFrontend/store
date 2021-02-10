import { Mutations } from 'vuex-smart-module'
import { NothingState } from '@/store/modules/nothing/index'

export class NothingMutations extends Mutations<NothingState> {
  public setNothing( Nothing: string ) {
    this.state.Nothing = Nothing
  }
}
