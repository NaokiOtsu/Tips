var hoge = function() {
  console.log('hoge')
}

var fuga = function() {
  console.log('fuga')
}

var routes = {
  '/hoge': hoge,
  '/fuga': fuga
}

var route = new Router(routes);
route.init();