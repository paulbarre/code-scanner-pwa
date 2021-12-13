import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use(Vuex);

const plugins = Object.values(modules).reduce(
  (modulePlugins, module) => (module.plugins
    ? [...modulePlugins, ...module.plugins]
    : modulePlugins),
  [],
);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules,
  plugins,
});
