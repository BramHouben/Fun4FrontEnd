import Vue from "vue";
import App from "./views/App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from './store';
// import "vuetify/dist/vuetify.min.css";


Vue.config.productionTip = false;

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ?
//     '/<funs4frontend>/' :
//     '/'
// }

new Vue({
  el: "#app",
  vuetify,
  router,
  store,
  render: h => h(App),
  template: "<App/>"
}).$mount("#app");