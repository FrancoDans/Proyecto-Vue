import Vue from 'vue'
import App from './App.vue'
import { Vuelidate } from 'vuelidate'
import  {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import  Axios  from 'axios'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.use(VueAxios, Axios)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
