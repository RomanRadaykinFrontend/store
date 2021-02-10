import Vue from 'vue'
import Vuex from 'vuex'
import { createStore, Module } from 'vuex-smart-module'
import { nothingModule } from './modules/nothing'

Vue.use(Vuex)

export const root = new Module({
  modules: {
    nothingModule,
  },
})

export const store = createStore(root)
