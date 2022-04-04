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

<style lang="scss" scoped>
  .form {
    display: flex;
    padding-bottom: 18px;
    border-bottom: 2px solid $accent;
    &__input {
      display: block;
      width: 100%;
      padding: 1em 1.75em;
      outline: none;
      border: $border;
      border-radius: $radius;
      color: $gray;
      flex: 1 1 auto;
      margin-right: 12px;
      &::placeholder {
        opacity: 0.5;
      }
      &:focus {
        border: $focus-border;
      }
    }
    &__btn {
        flex: 0 1 180px;
    }
  }
</style>
