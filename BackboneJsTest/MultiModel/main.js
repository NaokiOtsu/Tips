console.log('init');

var model = {};
model.modelA = new ModelA({'aaa': 1});
model.modelB = new ModelB();

var view = new View({model: model});

