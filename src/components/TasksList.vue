<template>
  <div class="tasks-list">
    <draggable v-model="tasksList">
      <transition-group tag="ul" name="list">
        <TasksListItem
          v-for="item in tasksList"
          :key="item.id"
          :tasks_list_item="item"
        />
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import draggable from 'vuedraggable'
import TasksListItem from './TasksListItem.vue'

export default {
  components: {
    draggable,
    TasksListItem
  },
  computed: {
    ...mapGetters(['tasks']),
    tasksList: {
      get () {
        return this.tasks
      },
      set (tasks) {
        this.updateTasks(tasks)
      }
    }
  },
  methods: {
    ...mapActions(['updateTasks'])
  }
}
</script>

<style lang="scss">
    .tasks-list {
        padding-top: 36px;
        padding-bottom: 36px;
    }
</style>
