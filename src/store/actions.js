export default {
  add_task ({ commit }, task) {
    commit('SET_TASK', task)
    commit('SORT_TASKS')
  },
  update_tasks ({ commit }, tasksList) {
    commit('SET_UPDATED_TASKS', tasksList)
  },
  toogle_task_status ({ commit }, { id, isCompleted }) {
    commit('SET_TASK_STATUS', {
      id: id,
      status: !isCompleted
    })
    commit('SORT_TASKS')
  },
  delete_task ({ commit }, id) {
    commit('REMOVE_TASK', id)
  },
  change_task_title ({ commit }, { id, updatedTitle }) {
    commit('SET_TASK_TITLE', {
      id: id,
      title: updatedTitle
    })
    commit('SORT_TASKS')
  },
  change_sort_option ({ commit }, option) {
    commit('SET_SORT_OPTION', option)
    commit('SORT_TASKS')
  }
}
