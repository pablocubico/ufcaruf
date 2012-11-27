define([
  'underscore',
  'backbone',
  '../models/artista'
], function(_, Backbone, Artista){
  var Artistas = Backbone.Collection.extend({
    model: Artista
  });
  return Artistas;
});