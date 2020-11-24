import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import ScrollTo from 'vue-scrollto';
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(ScrollTo);
AOS.init();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
