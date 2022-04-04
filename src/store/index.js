import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    sortOptions: ['time', 'content', 'status'],
    selectedSortOption: JSON.parse(localStorage.getItem('sort_by')) || 'time'
  },
  mutations,
  actions,
  getters
})

export default store
