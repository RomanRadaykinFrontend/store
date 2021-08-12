import { CommonState } from './index.js'
import { Actions } from 'vuex-smart-module'
import { CommonGetters } from '@/store/modules/common/getters'
import { CommonMutations } from '@/store/modules/common/mutations'
import { getProducts } from '@/mocks/getProducts'



export class CommonActions extends Actions<
CommonState,
CommonGetters,
CommonMutations,
CommonActions
> {
  public async getData() {
    this.commit( 'setIsDataLoading', true )
    try {
      const res = await getProducts({})
      this.commit( 'setData', res.data )
      this.commit( 'setIsDataLoading', false )
    } catch ( e ) {
      console.error( e )
      this.commit( 'setIsDataLoading', false )
    }
  }
}
