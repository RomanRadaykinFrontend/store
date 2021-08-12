import { Getters } from 'vuex-smart-module'
import { CommonState } from '@/store/modules/common/index'

export class CommonGetters extends Getters<CommonState> {
  get data() {
    return this.state.data
  }

  get isDataLoading(){
    return this.state.isDataLoading
  }
}
