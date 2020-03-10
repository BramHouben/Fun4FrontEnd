import Vue from "vue";
import App from "./views/App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
// import "vuetify/dist/vuetify.min.css";


Vue.config.productionTip = false;



new Vue({
  el: "#app",
  vuetify,
  router,
  render: h => h(App),
  template: "<App/>"
}).$mount("#app");