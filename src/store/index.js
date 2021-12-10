import Vue from 'vue';
import Vuex from 'vuex';
import detector from './modules/detector';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    detector,
  },
  plugins: [
    ...detector.plugins,
  ],
});
