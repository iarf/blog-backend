import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import './plugins/bootstrap-vue';
import apolloProvider from './apollo-client';
import { store } from './store';

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  router,
  store,
  apolloProvider,
  apollo: {},
  render: h => h(App),
}).$mount('#app');
