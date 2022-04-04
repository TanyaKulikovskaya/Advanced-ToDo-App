export default {
  saveTasks (tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
}
