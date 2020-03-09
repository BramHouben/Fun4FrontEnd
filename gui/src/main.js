import Vue from "vue";
import App from "./views/App.vue";
import router from "./router";
import vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;
Vue.use(vuetify, {
  iconfont: "mdi"
});
export default new vuetify({
  theme: {
    primary: "#1976D2",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount("#app");