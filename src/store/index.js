import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isNavOpen: false,
  },
  getters: {
    navState: state => {
      return state.isNavOpen;
    },
  },
  mutations: {
    toggleNav: state => {
      state.isNavOpen = !state.isNavOpen;
    },
  },
});
