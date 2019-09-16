import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'iview/dist/styles/iview.css';
import { Button, Radio,Anchor,AnchorLink } from 'iview';
Vue.component('Button', Button);
Vue.component('Radio', Radio);
Vue.component('i-Anchor', Anchor);
Vue.component('Anchor', AnchorLink);

import '@/stylus/index.styl';

import axios from 'axios';
Vue.prototype.$axios = axios;

import {baseURL,} from '@/js/public.js';
Vue.prototype.$baseURL = baseURL;

import utils from '@/js/utils';
Vue.prototype.$utils = utils;


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
