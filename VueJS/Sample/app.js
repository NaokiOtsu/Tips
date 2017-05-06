Vue.component('child', {
    template: '#child-template',
    data: function () {
        return { msg: 'hello' }
    },
    methods: {
        notify: function () {
            if (this.msg.trim()) {
                this.$dispatch('child-msg', this.msg);
                this.msg = '';
            }
        }
    }
})

var parent = new Vue({
    el: '#events-example',
    data: {
        messages: []
    },
    events: {
        'child-msg': function (msg) {
            this.messages.push(msg);
        }
    }
})