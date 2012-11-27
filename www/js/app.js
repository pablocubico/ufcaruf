
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Zepto provides nice js and DOM methods (very similar to jQuery,
    // and a lot smaller):
    // http://zeptojs.com/
    var $ = require('zepto'),
        _ = require('underscore'),
        Backbone = require('backbone');

    // Need to verify receipts? This library is included by default.
    // https://github.com/mozilla/receiptverifier
    require('receiptverifier');

    // Want to install the app locally? This library hooks up the
    // installation button. See <button class="install-btn"> in
    // index.html
    require('./install-button');

    // MomentJS para el formato de fecahs
    require('./moment');
    // i18n - Español
    require('./es');
    moment.lang('es');

    // Traemos los datos de un JS
    var datos = require('./datos');

    // Colecciones
    var Discos = require('./collections/discos'),
        Artistas = require('./collections/artistas'),
        Fechas = require('./collections/fechas'),
        Novedades = require('./collections/novedades');

    // Vistas
    var HomeView = Backbone.View.extend({
            tagName: "div",
            template: _.template($('#ufcaruf-home').html()),
            render: function (eventName) {
                $(this.el).html(this.template());
                return this;
            }
        }),

        // Artistas e ítems de artistas
        ArtistasView = Backbone.View.extend({

            tagName: "div",
            template: _.template($('#ufcaruf-artistas').html()),
            render: function (eventName) {
                
                $(this.el).html(this.template());

                // Recorro el modelo de artistas
                _.each(this.model.models, function (artista) {
                    $(this.el).find('#listado-artistas').append(new ArtistasItemView({ model: artista }).render().el);
                }, this);

                return this;
            }
        }),
        ArtistasItemView = Backbone.View.extend({
         
            tagName:"div",
         
            template:_.template($('#ufcaruf-artista-item').html()),
         
            render:function (eventName) {
                $(this.el).html(this.template(this.model.toJSON()));
                return this;
            }
         
        }),

        // Fechas e ítems de fechas
        FechasView = Backbone.View.extend({

            tagName: "div",
            template: _.template($('#ufcaruf-fechas').html()),
            render: function (eventName) {
                
                $(this.el).html(this.template());

                // Recorro el modelo de fechas
                _.each(this.model.models, function (fecha) {
                    $(this.el).find('#listado-fechas').append(new FechasItemView({ model: fecha }).render().el);
                }, this);

                return this;
            }
        }),
        FechasItemView = Backbone.View.extend({
         
            tagName:"li",
         
            template:_.template($('#ufcaruf-fecha-item').html()),
         
            render:function (eventName) {
                var modelFecha = this.model.toJSON();
                modelFecha.fechaLarga = moment(modelFecha.fecha, "YYYY-MM-DD HH:mm").format('dddd, D \\d\\e MMMM \\d\\e YYYY - HH:mm\\h\\s');
                modelFecha.fechaRelativa = moment(modelFecha.fecha, "YYYY-MM-DD HH:mm").fromNow();
                $(this.el).html(this.template(modelFecha));
                return this;
            }
         
        });


    // Router
    var AppRouter = Backbone.Router.extend({
     
        routes:{
            "": "home",
            "artistas": "artistas",
            "fechas": "fechas"
        },
     
        home: function () {
            this.homeView = new HomeView();
            $('#main-content').html(this.homeView.render().el);
        },

        artistas: function() {
            this.artistasView = new ArtistasView({model: datos.artistas});
            $('#main-content').html(this.artistasView.render().el);
        },

        fechas: function() {          
            this.fechasView = new FechasView({model: datos.fechas});
            $('#main-content').html(this.fechasView.render().el);
        }

    });
     
    var app = new AppRouter();
    Backbone.history.start();

});

