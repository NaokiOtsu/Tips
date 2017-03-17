import ToDoModel from './Model';
import ToDoView from './View';
import ToDoCtrl from './Controller';

const model = ToDoModel();
const view = ToDoView(model);
const ctrl = ToDoCtrl(view, model);
model.register(view, ctrl);
