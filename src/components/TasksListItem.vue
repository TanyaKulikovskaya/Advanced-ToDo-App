<template>
  <li class="tasks-list-item">
      <span class="tasks-list-item__title">{{ tasks_list_item.title }}</span>
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
  }
}
</script>

<style lang="scss">
    .tasks-list-item {
        padding: 16px 12px;
        border-radius: $radius;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, .125);
        background-color: $white;
        &__title {
            font-weight: 500;
            font-size: 18px;
        }
        &:not(:last-child) {
            margin-bottom: 12px;
        }
    }
</style>
