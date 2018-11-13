import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { store } from './store/store';
import 'bulma/css/bulma.css'

import CustomersList from './components/CustomersList'
import AddCustomer from './components/AddCustomer'
import Signup from './components/Signup'
import Signin from './components/Signin'

Vue.config.productionTip = false
Vue.use(VueRouter);
const Routes= [
  { path: '/', component: CustomersList},
  { path: '/add', component: AddCustomer},
  { path: '/register', component: Signup},
  { path: '/login', component: Signin},
];
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: router,
  store: store,
}).$mount('#app')
