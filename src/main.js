  
import Vue from 'vue'
import App from './App.vue'
import AppDropdown from './components/AppDropdown'
import AppHero from './components/AppHero'

Vue.config.productionTip = false

Vue.component('AppHero', AppHero)
Vue.component('AppDropdown', AppDropdown)

new Vue({
  render: h => h(App),
}).$mount('#app')