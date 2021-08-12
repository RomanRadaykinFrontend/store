import { Mutations } from 'vuex-smart-module'
import { CommonState } from '@/store/modules/common/index'
import { Product } from '@/types/common'

export class CommonMutations extends Mutations<CommonState> {
  public setData( data: Array<Product> | []) {
    this.state.data = data
  }

  public setIsDataLoading( value: boolean ){
    this.state.isDataLoading = value
  }
}
