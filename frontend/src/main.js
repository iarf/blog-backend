import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/bootstrap-vue';
import apolloProvider from './apollo-client';


Vue.config.productionTip = false;


new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
