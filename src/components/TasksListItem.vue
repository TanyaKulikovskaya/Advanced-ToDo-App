<template>
  <li class="tasks-list-item">
    <p
      class="tasks-list-item__title"
      :class="{ done: tasks_list_item.isCompleted }"
      @click="toogleCompleteStatus"
    >
      {{ tasks_list_item.title }}
    </p>
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
  methods: {
    toogleCompleteStatus () {
      this.$emit('changeCompleteStatus')
    }
  }
}
</script>

<style lang="scss">
  .tasks-list-item {
    display: flex;
    padding: 1em 1.75em 1em 3em;
    border-radius: $radius;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, .125);
    background-color: $white;
    &__title {
      flex: 1;
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      cursor: pointer;
      &.done {
        text-decoration: line-through;
        color: $gray;
      }
    }
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
</style>
