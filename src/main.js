import Vue from 'vue'
import App from './App.vue'
import { Vuelidate } from 'vuelidate'
import  BootstrapVue from 'bootstrap-vue'
Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(Vuelidate)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
