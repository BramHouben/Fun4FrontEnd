import Vue from "vue";
import VueRouter from "vue-router";
import VueSession from "vue-session";
// import App from '../views/App.vue'
import store from '../store/index.js'

Vue.use(VueRouter);
Vue.use(VueSession, options);

var options = {
  persist: true
};

const routes = [{
    path: "/products",
    name: "Products",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/productpage.vue")
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
    beforeEnter: isAdmin,
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/CrudPage.vue")
  }, {
    path: "/orders",
    name: "Orders",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/OrdersPage.vue")
  }, {
    path: "/forbidden",
    name: "Forbidden",
    component: () => import("../components/Forbidden.vue")
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/CheckOutPage.vue")
  },
  {
    path: "/account",
    name: "Account",

    component: () => import("../views/AccountPage.vue")
  },
  {
    path: "/CrudOrders",
    name: "CrudOrders",
    beforeEnter: isAdmin,
    component: () => import("../views/CrudOrdersAdmin.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

async function isAdmin(to, from, next) {
  await store.dispatch("checkAdminRights");

  if (!store.getters.isAdmin) {
    next('/forbidden')
  } else {
    next()
  }
}


export default router;