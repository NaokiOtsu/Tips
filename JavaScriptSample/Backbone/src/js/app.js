import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';

const Model = Backbone.Model.extend({
  initialize() {
    console.log(this)
  },
  
  start() {
    console.log(this)
  }
});

const model = new Model({
  user_id: '111',
  url: {
    polling: 'polling',
    attack: 'attack',
    support: 'support',
    result: 'result',
    give_up: 'give_up'
  },
  sgi_host: 'sgi_host',
  img_version: 'img_version',
  session_key: 'session_key'
});
model.start();

// console.log(model);