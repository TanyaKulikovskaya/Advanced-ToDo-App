<template>
  <div id="app">
    <div class="container">
      <h1>Todo App</h1>
      <add-new-task-form />
      <select-sort-option v-show="tasks.length > 0" />
      <tasks-list />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import AddNewTaskForm from './components/AddNewTaskForm.vue'
import TasksList from './components/TasksList.vue'
import SelectSortOption from './components/SelectSortOption.vue'

export default {
  name: 'App',
  components: {
    AddNewTaskForm,
    TasksList,
    SelectSortOption
  },
  created () {
    if (this.tasks.length > 0) {
      this.SORT_TASKS()
    }
  },
  computed: {
    ...mapGetters(['tasks'])
  },
  methods: {
    ...mapMutations(['SORT_TASKS'])
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
