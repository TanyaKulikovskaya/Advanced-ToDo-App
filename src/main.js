import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { uniTrash, uniCheck, uniMultiply, uniSave, uniEdit } from 'vue-unicons/dist/icons'

Unicon.add([uniTrash, uniCheck, uniMultiply, uniSave, uniEdit])

Vue.use(Unicon, {
  height: 28,
  width: 28
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
