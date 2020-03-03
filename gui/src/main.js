import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import 'vue-material/dist/vue-material.min.css'
import VueMaterial from 'vue-material'

Vue.config.productionTip = false;
Vue.use(VueMaterial);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app');