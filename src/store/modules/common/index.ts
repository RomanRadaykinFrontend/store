import { Module } from 'vuex-smart-module'
import { CommonGetters } from '@/store/modules/common/getters'
import { CommonMutations } from '@/store/modules/common/mutations'
import { CommonActions } from '@/store/modules/common/actions'
import { Product } from '@/types/common'


export class CommonState {
  public data = [] as Array<Product>
  public isDataLoading = false
}

export const commonModule = new Module({
  namespaced: true,
  state: CommonState,
  getters: CommonGetters,
  mutations: CommonMutations,
  actions: CommonActions,
})
