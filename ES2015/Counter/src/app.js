import CountModel from './CountModel';
import CountView from './CountView';
import CountController from './CountController';

const countModel = new CountModel();
const countView = new CountView(countModel);
CountController.create(countModel, countView);
