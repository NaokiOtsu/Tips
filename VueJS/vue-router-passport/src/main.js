import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAuthenticate from 'vue-authenticate'

import App from './App.vue'
import routes from './routes'

Vue.use(VueRouter);
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:3000', // Your API domain

  providers: {
    facebook: {
      clientId: '721786398006340',
      redirectUri: 'http://localhost:8080/auth/callback' // Your client app URL
    }
  }
})

const router = new VueRouter({
  routes: routes
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
