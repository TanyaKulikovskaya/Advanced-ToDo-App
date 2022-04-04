import LocalStorage from '../services/LocalStorage'

export default {
  SET_TASK (state, task) {
    state.tasks.push(task)
    LocalStorage.saveTasks(state.tasks)
  },
  SET_UPDATED_TASKS (state, tasksList) {
    state.tasks = tasksList
    LocalStorage.saveTasks(state.tasks)
  },
  SET_TASK_STATUS (state, { id, status }) {
    state.tasks = state.tasks.map((item) => (item.id !== id ? item : { ...item, isCompleted: status }))
    LocalStorage.saveTasks(state.tasks)
  },
  REMOVE_TASK (state, id) {
    state.tasks = state.tasks.filter((item) => item.id !== id)
    LocalStorage.saveTasks(state.tasks)
  },
  SET_TASK_TITLE (state, { id, title }) {
    state.tasks = state.tasks.map((item) => (item.id !== id ? item : { ...item, title: title }))
    LocalStorage.saveTasks(state.tasks)
  },
  SET_SORT_OPTION (state, option) {
    state.selectedSortOption = option
    LocalStorage.saveSortOption(state.selectedSortOption)
  },
  SORT_TASKS (state) {
    switch (state.selectedSortOption) {
      case 'time':
        state.tasks = [...state.tasks].sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at))
        break
      case 'content':
        state.tasks = [...state.tasks].sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'status':
        state.tasks = [...state.tasks].sort((a, b) => a.isCompleted - b.isCompleted)
        break
    }
    LocalStorage.saveTasks(state.tasks)
  }
}
