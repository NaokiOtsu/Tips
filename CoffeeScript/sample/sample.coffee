'use strict';

Model = Backbone.Model.extend(
  initialize: ->
    # console.log('model init')
)

Collection = Backbone.Collection.extend(
  #model: Model
  initialize: ->
  
  findByFigureId: (id) ->
    return this.find((figure) -> figure.get('figure_id') == id)
)

View2 = Backbone.View.extend(
  initialize: ->
    # console.log(this.model)
    
  update: (model) ->
    console.log(model)
    console.log(model.toJSON())
    console.log(JSON.stringify(model))
  
)

View = Backbone.View.extend(
  el: "body"
  
  initialize: ->
    json = 
      'figure_id': 111
      'name': 'naoki'
      
    model = new Model(json)
    collection = new Collection([model])
    
    view2 = new View2({ model: model });
    view2.update(model);
    view2.render();
)

new View();

