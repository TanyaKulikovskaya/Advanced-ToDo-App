export default {
  add_task ({ commit }, task) {
    commit('SET_TASK', task)
  },
  update_tasks ({ commit }, tasksList) {
    commit('SET_UPDATED_TASKS', tasksList)
  },
  toogle_task_status ({ commit }, { id, isCompleted }) {
    commit('SET_TASK_STATUS', {
      id: id,
      status: !isCompleted
    })
  }
}
