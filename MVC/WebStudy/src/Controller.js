import $ from 'jquery';

const ToDoCtrl = function(view, model) {
  const DOM = view.getDOM();

  DOM.input.blur(() => {
    model.add(DOM.input.val());
  });

  DOM.input.keyup(ev => {
    if (ev.which == 13 || ev.keyCode == 13) {
      DOM.input.blur();
    }
  });

  return {
    notify: function() {
      DOM.list.find('.input').each(function(index) {
        $(this).click(() => {
          model.complete(index, $(this).is(':checked'));
        });
      });

      DOM.list.find('.remove').each(function(index) {
        $(this).click(() => {
          model.remove(index);
        });
      });
    }
  };
};

export default ToDoCtrl;
