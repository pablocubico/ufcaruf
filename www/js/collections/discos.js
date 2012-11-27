define([
  'underscore',
  'backbone',
  '../models/disco'
], function(_, Backbone, Disco){
  var Discos = Backbone.Collection.extend({
    model: Disco
  });
  return Discos;
});