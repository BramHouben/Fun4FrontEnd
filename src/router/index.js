import Vue from "vue";
import VueRouter from "vue-router";
import productPage from "@/views/productpage";
import VueSession from "vue-session";
// import App from '../views/App.vue'

Vue.use(VueRouter);
Vue.use(VueSession, options);

var options = {
  persist: true
};

const routes = [{
    path: "/products",
    name: "Products",
    component: productPage
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  }, {
    path: "/register",
    name: "register",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Registerpage.vue")
  }, {
    path: "/login",
    name: "Login",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/LoginPage.vue")
  }, {
    path: "/crud",
    name: "Crud",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/CrudPage.vue")
  }, {
    path: "/orders",
    name: "Orders",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/OrdersPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;