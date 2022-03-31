export default {
  add_task ({ commit }, task) {
    commit('SET_TASK', task)
  },
  updateTasks ({ commit }, tasksList) {
    commit('SET_UPDATED_TASKS', tasksList)
  }
}
