<template>
  <form
    class="form"
    @submit.prevent="handleSubmit"
  >
    <input
      v-model.trim="taskTitle"
      type="text"
      placeholder="Enter a new task"
      class="form__input"
    />
    <button
      class="form__btn btn"
      :disabled="taskTitle === ''"
    >
      Add task
    </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      taskTitle: ''
    }
  },
  methods: {
    ...mapActions(['add_task']),
    handleSubmit () {
      if (this.taskTitle !== '') {
        const newTask = {
          id: Math.floor(Math.random() * 10000),
          title: this.taskTitle,
          isCompleted: false,
          created_at: new Date()
        }
        this.add_task(newTask)
        this.taskTitle = ''
      }
    }
  }
}
</script>

<style lang="scss">
  .form {
    display: flex;
    padding-bottom: 18px;
    border-bottom: 2px solid $accent;
    &__input {
        flex: 1 1 auto;
        margin-right: 12px;
    }
    &__btn {
        flex: 0 1 180px;
    }
  }
</style>
