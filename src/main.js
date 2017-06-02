import Vue from 'vue'
import VueRouter from 'vue-router'

// Own components
import App from './components/App.vue'
import Home from './components/Home.vue'
import Restaurant from './components/Restaurant.vue'
import TopRestaurant from './components/TopRestaurant.vue'
import Contacto from './components/Contacto.vue'

// Load Vue Router
Vue.use(VueRouter);

// Create own routes
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/restaurantes', name: 'restaurant', component: Restaurant },
  { path: '/restaurantes/destacados/:id', name: 'top-restaurant', component: TopRestaurant },
  { path: '/contacto', name: 'contacto', component: Contacto }
];

// Associate to router our new routes
const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('home', Home);
Vue.component('restaurants', Restaurant);
Vue.component('top-restaurants', TopRestaurant);
Vue.component('contacto', Contacto);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
