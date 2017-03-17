const Subject = () => {
  const observes = [];

  return {
    add: item => {
      observes.push(item);
    },

    removeAll: () => {
      observes.length = 0;
    },

    notifyObservers: () => {
      observes.forEach(item => {
        item.notify();
      });
    }
  };
};

export default Subject;
