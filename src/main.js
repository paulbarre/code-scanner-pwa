import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import i18n from './i18n';
import vuetify from './plugins/vuetify';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  i18n,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
