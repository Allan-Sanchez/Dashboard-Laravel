/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

Vue.use(VueRouter);     

let routes = [
    { path: '/dashboard', component: require('./components/dashboardComponent.vue').default },
    { path: '/users', component: require('./components/usersComponent.vue').default },
    { path: '/profile', component: require('./components/profileComponent.vue').default }
  ];

  const router = new VueRouter({
    mode: 'history',
    routes 
  });



// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    router,
});
