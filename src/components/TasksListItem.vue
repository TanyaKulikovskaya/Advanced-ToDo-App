<template>
  <li class="tasks-list-item">
    <p
      v-show="!isEditing"
      class="tasks-list-item__title"
      :class="{ done: tasks_list_item.isCompleted }"
      @click="toogleCompleteStatus"
    >
      {{ tasks_list_item.title }}
    </p>
    <form
      v-show="isEditing"
      class="tasks-list-item__form"
      @submit.prevent="handleSubmit"
    >
      <input
        ref="input"
        :value="tasks_list_item.title"
        class="tasks-list-item__input"
      />
      <div class="tasks-list-item__actions">
        <unicon
          name="multiply"
          class="unicon--basic"
          @click="handleCancel"
        />
        <unicon
          name="save"
          class="unicon--basic"
          @click="handleSubmit"
        />
      </div>
    </form>
    <div class="tasks-list-item__actions">
      <unicon
        v-if="!tasks_list_item.isCompleted && !isEditing"
        name="edit"
        class="unicon--basic"
        @click="toogleToEditing"
      />
      <unicon
        v-else-if="tasks_list_item.isCompleted"
        name="check"
        class="unicon--basic"
        @click="toogleCompleteStatus"
      />
      <unicon
        name="trash"
        class="unicon--remove"
        @click="remove"
      />
    </div>
  </li>
</template>

<script>

export default {
  props: {
    tasks_list_item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    toogleCompleteStatus () {
      this.$emit('changeCompleteStatus')
    },
    remove () {
      this.$emit('remove')
    },
    toogleToEditing () {
      this.isEditing = true
      this.focusInput()
    },
    focusInput () {
      this.$nextTick(() => this.$refs.input.focus())
    },
    handleCancel () {
      this.isEditing = false
    },
    handleSubmit () {
      const value = this.$refs.input.value.trim()
      if (value !== '') {
        const data = {
          id: this.tasks_list_item.id,
          updatedTitle: value
        }
        this.$emit('changeTitle', data)
        this.isEditing = false
      } else {
        this.remove()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .tasks-list-item {
    display: flex;
    align-items: center;
    padding: 1em 1.75em;
    border-radius: $radius;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, .125);
    background-color: $white;
    &__form {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 24px;
    }
    &__title,
    &__input {
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      cursor: pointer;
    }
    &__title {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 12px;
      &.done {
        text-decoration: line-through;
        color: $gray;
      }
    }
    &__input {
      border: none;
      min-width: 0;
    }
    &__actions {
      display: flex;
      .unicon {
        &:hover {
          cursor: pointer;
        }
        &--basic {
          fill: $gray;
          &:hover {
            fill: $dark;
          }
        }
        &--remove {
          fill: $error;
          &:hover {
            fill: $hover-error;
          }
        }
        &:not(:last-child) {
          margin-right: 24px;
        }
      }
    }
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
</style>
