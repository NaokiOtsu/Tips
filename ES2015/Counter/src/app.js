import CountModel from './CountModel';
import CountView from './CountView';
import CountController from './CountController';

const count_model = new CountModel();
const count_view = new CountView(count_model);
const count_controller = new CountController(count_model, count_view);

