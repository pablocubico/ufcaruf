define([
  'underscore',
  'backbone',
  '../models/fecha'
], function(_, Backbone, Fecha){
  var Fechas = Backbone.Collection.extend({
    model: Fecha
  });
  return Fechas;
});