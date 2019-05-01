

require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';
import { Form, HasError, AlertError } from 'vform';
import VueRouter from 'vue-router';
import vueProgressBar from 'vue-progressbar';
import swal from 'sweetalert2';

/*
** @V form 
*/
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

/*
** @vue router 
*/
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

  // end vue router
  
  /*
  ** @filters 
  */
 Vue.filter('upText',(text) => {
   return text.charAt(0).toUpperCase()+text.slice(1);
 });

 Vue.filter('myDate',(date) => {
   return moment(date).format('MMMM Do YYYY');
 });

//  end filter

/*
** @vue progress bar 
*/
Vue.use(vueProgressBar,{
  color:'rbga(143,255,199)',
  failedColor:'red',
  height:'3px',
});
// end vue progress bar

/*
** @Sweetalert  
*/
window.swal = swal;
const toast = swal.mixin({
  toast: true,
  position:'top-end',
  showConfirmButton:false,
  timer:3000,
});

window.toast = toast;

// end sweetalert
const app = new Vue({
    el: '#app',
    router,
});
