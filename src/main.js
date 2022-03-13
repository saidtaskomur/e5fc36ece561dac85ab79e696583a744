import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from '../src/router';
import store from '../src/state';
import axios from './plugins/axios';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
