define([
  'underscore',
  'backbone',
  '../models/novedad'
], function(_, Backbone, Novedad){
  var Novedades = Backbone.Collection.extend({
    model: Novedad
  });
  return Novedades;
});