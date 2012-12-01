define([
  'underscore',
  'backbone',
  './collections/artistas',
  './collections/fechas',
  './collections/discos',
], function(_, Backbone, Artistas, Fechas, Discos){

    // Popular los datos
    var listadoArtistas = new Artistas([
        {
            nombre: 'ORQUESTA DE PERROS',
            imagen: 'http://www.ufcaruf.com.ar/wp-content/uploads/2012/06/Orquesta-de-perros-2012-Cascallar-300x175.jpg',
            autorFoto: 'Manuel Cas­callar',
            descripcion: 'Orquesta de Per­ros nace como la banda acús­tica de Soviético, Lau­taro Barceló y Pablo Matías Vidal, pero en  el año 2009 se suman Juan Bautista Bar­cel­landi (batería) y Pablo La Fer­rara (bajo), tomando un sonído más eléc­trico. Ese mismo año gra­ban “Per­ros de Orquesta”, con­tando aún con Ale­jan­dra Berra en cello.<br><br>En Marzo de 2012 edi­tan su primer LP “Roles y Ofi­cios” grabado en Estu­dios Tolosa y mas­ter­i­zado por el inglés Gra­ham Sut­ton. El disco rep­re­senta el mismo crudo del vivo más una flota de gui­tar­ras acús­ti­cas y delirios de estu­dio. Se edita fisi­ca­mente en octubre, con­tando con Ger­man Giuliodoro en gui­tarra y banjo.',
            urlContacto: 'http://www.facebook.com/pages/Orquesta-de-Perros/120453848048169',
            textoContacto: 'Orquesta de Perros'
        },
        {
            nombre: 'Bjork',
            imagen: 'http://www.ufcaruf.com.ar/wp-content/uploads/2012/06/La-Teoria-del-Caos-UfCarufDiscos20121-300x183.jpg',
            autorFoto: 'Juan Pérez',
            descripcion: '',
            urlContacto: 'http://www.facebook.com/pages/Orquesta-de-Perros/120453848048169',
            textoContacto: 'Orquesta de Perros'
        },
        {
            nombre: 'La Mona Giménez',
            imagen: 'http://www.ufcaruf.com.ar/wp-content/uploads/2012/06/miro-y-su-fodj-300x196.jpg',
            autorFoto: 'Juan Pérez',
            descripcion: '',
            urlContacto: 'http://www.facebook.com/pages/Orquesta-de-Perros/120453848048169',
            textoContacto: 'Orquesta de Perros'
        },
        {
            nombre: 'Jonsi',
            imagen: 'http://www.ufcaruf.com.ar/wp-content/uploads/2012/06/Orquesta-de-perros-2012-Cascallar-300x175.jpg',
            autorFoto: 'Juan Pérez',
            descripcion: '',
            urlContacto: 'http://www.facebook.com/pages/Orquesta-de-Perros/120453848048169',
            textoContacto: 'Orquesta de Perros'
        },
        {
            nombre: 'Bjork',
            imagen: 'http://www.ufcaruf.com.ar/wp-content/uploads/2012/06/La-Teoria-del-Caos-UfCarufDiscos20121-300x183.jpg',
            autorFoto: 'Juan Pérez',
            descripcion: '',
            urlContacto: 'http://www.facebook.com/pages/Orquesta-de-Perros/120453848048169',
            textoContacto: 'Orquesta de Perros'
        },
        {
            nombre: 'La Mona Giménez',
            imagen: 'http://www.ufcaruf.com.ar/wp-content/uploads/2012/06/miro-y-su-fodj-300x196.jpg',
            autorFoto: 'Juan Pérez',
            descripcion: '',
            urlContacto: 'http://www.facebook.com/pages/Orquesta-de-Perros/120453848048169',
            textoContacto: 'Orquesta de Perros'
        },
        {
            nombre: 'Jonsi',
            imagen: 'http://www.ufcaruf.com.ar/wp-content/uploads/2012/06/Orquesta-de-perros-2012-Cascallar-300x175.jpg',
            autorFoto: 'Juan Pérez',
            descripcion: '',
            urlContacto: 'http://www.facebook.com/pages/Orquesta-de-Perros/120453848048169',
            textoContacto: 'Orquesta de Perros'
        },
        {
            nombre: 'Bjork',
            imagen: 'http://www.ufcaruf.com.ar/wp-content/uploads/2012/06/La-Teoria-del-Caos-UfCarufDiscos20121-300x183.jpg',
            autorFoto: 'Juan Pérez',
            descripcion: '',
            urlContacto: 'http://www.facebook.com/pages/Orquesta-de-Perros/120453848048169',
            textoContacto: 'Orquesta de Perros'
        },
    ]),
    
    // Cargar las fechas en formato YYYY-MM-DD 24:00. El formato amigable se le da después con MomentJS.

    listadoFechas = new Fechas([
        {
            fecha: '2012-11-24 16:00',
            titulo: 'Miró y su fabulosa orquesta de juguete',
            lugar: 'Ciudad Alterna, C.C.Islas Malv­inas'
        },
        {
            fecha: '2012-11-28 14:00',
            titulo: 'Miró y su fabulosa orquesta de juguete',
            lugar: 'Ciudad Alterna, C.C.Islas Malv­inas'
        },
        {
            fecha: '2012-11-30 12:00',
            titulo: 'Miró y su fabulosa orquesta de juguete',
            lugar: 'Ciudad Alterna, C.C.Islas Malv­inas'
        },
        {
            fecha: '2012-12-02 17:00',
            titulo: 'Miró y su fabulosa orquesta de juguete',
            lugar: 'Ciudad Alterna, C.C.Islas Malv­inas'
        },
    ]),

    listadoDiscos = new Discos([
        {
            artista: 'Miró y su fabulosa orquesta de juguete',
            titulo: 'Adelanto 2013',
            anio: '2012',
            url_descarga: 'http://miroysufabulosaorquestadejuguete1.bandcamp.com/album/adelanto-2013',
            codigo_uc: '0023',
            descripcion: 'Ade­lanto del disco que la banda de Uf Caruf! pub­li­cará en el 2013. Grabado en Nakao (Juan Ponche Abra­ham y Gabriel Ricci) y Estu­dios Tolosa (Eduardo Car­reras). Mez­clado y mas­ter­i­zado por Juan Ponche Abra­ham. Pro­ducido por Miro y Su FODJ y Juan Ponche Abra­ham. Ilus­tración: Mónica Bagur. MIRO Y SU FODJ son: Lucas “Rock” Gre­gorini (gui­tar­ras y voces) Joaquin Inza (baterías y per­cu­siones) Juan Artero (tecla­dos) Mis­ter (voces y gui­tar­ras) Lau­taro Barceló (gui­tar­ras y voces) Flavio Mogetta (bajo)',
            embed: '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F2843663&amp;auto_play=false&amp;show_artwork=true&amp;color=c07450"></iframe>',
            tapa: 'img/tapas/ASTRONAUTA-Y-COWBOY-298x300.jpg'
        },
        {
            artista: 'Otro disco',
            titulo: 'Uno más viejito',
            anio: '1988',
            url_descarga: 'http://miroysufabulosaorquestadejuguete1.bandcamp.com/album/adelanto-2013',
            codigo_uc: '0002',
            descripcion: 'Lorem ipsum disco es cultura',
            embed: '<iframe width="300" height="355" style="position: relative; display: block; width: 300px; height: 355px;" src="http://bandcamp.com/EmbeddedPlayer/v=2/album=3652914031/size=grande2/bgcol=FFFFFF/linkcol=4285BB/" allowtransparency="true" frameborder="0"><a href="http://miroysufabulosaorquestadejuguete1.bandcamp.com/album/adelanto-2013">Adelanto 2013 by Miro y su Fabulosa Orquesta de Juguete</a></iframe>',
            tapa: 'img/tapas/ASTRONAUTA-Y-COWBOY-298x300.jpg'
        },
    ]);

    return {
        artistas: listadoArtistas,
        fechas: listadoFechas,
        discos: listadoDiscos
    }
   
});