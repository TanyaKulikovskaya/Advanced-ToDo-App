export default {
  saveTasks (tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },
  saveSortOption (option) {
    localStorage.setItem('sort_by', JSON.stringify(option))
  }
}
