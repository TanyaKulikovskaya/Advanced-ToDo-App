<template>
  <div class="select">
    <h4 class="select__title">
      Sort tasks by
    </h4>
    <div class="select__dropdown">
       <select v-model="selectedSort">
          <option
            v-for="sortOption in sortOptions"
            :key="sortOption"
            :value="sortOption"
          >
            {{ sortOption }}
          </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['sortOptions']),
    ...mapGetters(['selectedSortOption']),
    selectedSort: {
      get () {
        return this.selectedSortOption
      },
      set (value) {
        this.change_sort_option(value)
      }
    }
  },
  methods: {
    ...mapActions(['change_sort_option'])
  }
}
</script>

<style lang="scss" scoped>
    .select {
        display: flex;
        align-items: center;
        &__title {
            color: $gray;
            margin-right: 12px;
            margin-left: 4px;
        }
        &__dropdown {
            position: relative;
            background-color: $light-gray;
            border-radius: 4px;
            display: flex;
            width: 120px;
            height: 2.5em;
            line-height: 2.5;
            select {
                appearance: none;
                border: none;
                flex: 1;
                padding: 0 .5em;
                line-height: inherit;
                font-family: inherit;
                background-color: inherit;
                color: inherit;
                cursor: pointer;
                &:active,
                &:focus {
                    outline: none;
                    box-shadow: none;
                }
            }
        &:after {
            content: "";
            position: absolute;
            top: 50%;
            right: 8px;
            transform: translateY(-2px);
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid $gray;
            pointer-events: none;
        }
    }
}

</style>
