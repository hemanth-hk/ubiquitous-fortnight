import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// New Vue Object
new Vue({
  render: h => h(App),
}).$mount('#app')
