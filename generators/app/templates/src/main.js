import Vue from 'vue';
import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';
import store from '@/store';
import axios from '@/plugins/axios';
import errorHandler from '@/plugins/errorHandler';
import apiAdapter from '@/plugins/apiAdapter';

Vue.config.productionTip = false;

new Vue({
  axios,
  apiAdapter,
  errorHandler,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
