<template>
  <div id="app">
    <div class="container">
      <h1>Todo App</h1>
      <add-new-task-form />
      <tasks-list />
    </div>
  </div>
</template>

<script>
import AddNewTaskForm from './components/AddNewTaskForm.vue'
import TasksList from './components/TasksList.vue'

export default {
  name: 'App',
  components: {
    AddNewTaskForm,
    TasksList
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  h1 {
    text-align: center;
  }
}
</style>
