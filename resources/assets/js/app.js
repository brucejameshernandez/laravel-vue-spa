import Vue from 'vue';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueRouter);
Vue.use(VueMaterial)
Vue.use(VueAxios, axios);

import App from './App.vue';
import Example from './components/Example.vue';
import Auth from './components/Auth.vue';

const routes = [{
    name: 'Auth',
    path: '/',
    component: Auth
}];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');