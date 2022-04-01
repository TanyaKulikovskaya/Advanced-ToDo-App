export default {
  SET_TASK (state, task) {
    state.tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  SET_UPDATED_TASKS (state, tasksList) {
    state.tasks = tasksList
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  SET_TASK_STATUS (state, { id, status }) {
    state.tasks = state.tasks.map((item) => (item.id !== id ? item : { ...item, isCompleted: status }))
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  REMOVE_TASK (state, id) {
    state.tasks = state.tasks.filter((item) => item.id !== id)
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  }
}
