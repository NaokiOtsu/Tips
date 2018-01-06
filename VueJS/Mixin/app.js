var obj = {
  created: function() {
    console.log(111)
  }
}

var vm = new Vue({
  mixins: [obj],
  created: function() {
    console.log(222)
  }
})

