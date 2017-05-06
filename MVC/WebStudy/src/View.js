import $ from 'jquery';
import Handlebars from 'handlebars';

const ToDoView = model => {
  const DOM = {
    input: $('#todo-input'),
    list: $('#todo-list')
  },

  templateFnc = Handlebars.compile($('#todo-template').html());

  const getData = () => {
    const isChecked = elem => elem.complete === true ? 'checked' : '';

    return model.getList().map((elem, index) => {
      return {
        val: elem.val,
        checked: isChecked(elem)
      };
    });
  }

  return {
    getDOM: () => DOM,

    notify: () => {
      const html = templateFnc({ view_list: getData() });
      DOM.list.html(html);
    }
  }
};

export default ToDoView;
