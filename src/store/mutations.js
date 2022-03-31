export default {
  SET_TASK (state, task) {
    state.tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  SET_UPDATED_TASKS (state, tasksList) {
    state.tasks = tasksList
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  }
}
