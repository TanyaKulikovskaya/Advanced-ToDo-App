<template>
  <div class="tasks-list">
    <draggable
      v-model="tasksList"
      @start="isDrag = true"
      @end="isDrag = false"
    >
      <transition-group tag="ul" :name="!isDrag ? 'list' : null">
        <TasksListItem
          v-for="item in tasksList"
          :key="item.id"
          :tasks_list_item="item"
          @changeCompleteStatus="changeTaskStatus(item)"
          @remove="removeTask(item.id)"
          @changeTitle="changeTaskTitle"
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
  data () {
    return {
      isDrag: false
    }
  },
  computed: {
    ...mapGetters(['tasks']),
    tasksList: {
      get () {
        return this.tasks
      },
      set (tasks) {
        this.update_tasks(tasks)
      }
    }
  },
  methods: {
    ...mapActions(['update_tasks']),
    ...mapActions(['toogle_task_status']),
    ...mapActions(['delete_task']),
    ...mapActions(['change_task_title']),
    changeTaskStatus (item) {
      this.toogle_task_status({
        id: item.id,
        isCompleted: item.isCompleted
      })
    },
    removeTask (id) {
      this.delete_task(id)
    },
    changeTaskTitle (data) {
      this.change_task_title(data)
    }
  }
}
</script>

<style lang="scss">
  .tasks-list {
    padding-top: 18px;
    padding-bottom: 18px;
  }

  .sortable-chosen {
    opacity: 0.5;
    background-color: $light-gray;
  }

  .sortable-ghost {
    background-color:$light-gray;
  }

  .list {
    position: relative;
    backface-visibility: hidden;
    z-index: 1;
    &-move {
      transition: all .6s ease-in-out .05s;
    }
    &-enter-active {
      transition: all .4s ease-out;
    }
    &-leave-active {
      transition: all .2s ease-in;
      position: absolute;
      z-index: 0;
    }
    &-enter,
    &-leave-to {
       opacity: 0;
    }
    &-enter {
      transform: scale(0.9);
    }
  }
</style>
