import Vue from 'vue'
import VueRouter from 'vue-router'
import productPage from "@/views/productpage";

// import App from '../views/App.vue'

Vue.use(VueRouter);

const routes = [




  {
    path: '/products',
    name: 'Products',
    component: productPage
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')

  },


];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router