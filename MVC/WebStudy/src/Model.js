import Subject from './Subject';

const ToDoModel = () => {
  const subject = Subject();
  const list = [];

  return {
    getList: () => list,

    add: text => {
      list.push({
        val: text,
        complete: false
      });
      subject.notifyObservers();
    },

    remove: index => {
      list.splice(index, 1);
      subject.notifyObservers();
    },

    complete: (index, isComplete) => {
      isComplete === true ? list[index].complete = true : list[index].complete = false;
      subject.notifyObservers();
    },

    register: (...args) => {
      subject.removeAll();
      console.log(args);
      args.forEach(elem => {
        subject.add(elem);
      });
    }
  };
};

export default ToDoModel;
