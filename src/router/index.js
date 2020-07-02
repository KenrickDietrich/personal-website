import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Spooky from '../views/Spooky.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/spookytrouble',
    name: 'Spooky',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Spooky,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
