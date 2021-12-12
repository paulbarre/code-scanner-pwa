import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use(Vuex);

const plugins = Object.values(modules).reduce(
  (modulePlugins, module) => {
    console.log(module);
    return (module.plugins
      ? [...modulePlugins, ...module.plugins]
      : modulePlugins);
  },
  [],
);
// console.log(Object.values(modules));

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
