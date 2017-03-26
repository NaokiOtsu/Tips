var Vue = require('vue');
var Router = require('vue-router');
var VueTouch = require('vue-touch');

Vue.use(Router);
Vue.use(VueTouch);

var Foo = {
  template: document.getElementById('foo.html')
};

var Boo = {
  template: '<p>boooo</p>'
};

var App = {};

var router = new Router({
  history: true
});

router.map({
  '/foo': {
    component: Foo
  },
  '/boo': {
    component: Boo
  }
});

router.start(App, '#app');

new Vue({
  el: '#foo',
  data: {
    event: ''
  },
  methods: {
    test: function (e) {
      this.event = e.type
    }
  }
})