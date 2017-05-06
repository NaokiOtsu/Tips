import Model from './Model';
import View from './View';
import Controller from './Controller';

const config = {
  battle_power: {
    current: 0,
    max: 5,
    select: 0
  },
  item: {
    orange: {
      current: 5
    },
    meat: {
      current: 5
    }
  }
};

const model = new Model(config);
const view = new View(model);
const controller = new Controller(view, model);
