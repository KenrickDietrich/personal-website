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
    component: Spooky,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
