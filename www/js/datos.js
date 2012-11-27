define([
  'underscore',
  'backbone',
  './collections/artistas',
  './collections/fechas',
], function(_, Backbone, Artistas, Fechas){

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
    ]);

    return {
        artistas: listadoArtistas,
        fechas: listadoFechas
    }
   
});