import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faVuejs,
  faAndroid,
  faJava,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faCalendarAlt,
  faGlobe,
  faCarAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ScrollTo from 'vue-scrollto';
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;
library.add(
  faVuejs,
  faAndroid,
  faJava,
  faPhone,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faCalendarAlt,
  faGlobe,
  faCarAlt,
);
Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(ScrollTo);
AOS.init();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
