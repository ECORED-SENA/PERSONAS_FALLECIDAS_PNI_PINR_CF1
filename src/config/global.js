export default {
  global: {
    componenteFormativo:
      'Fundamentos y marco normativo para la gestión de las personas fallecidas no identificadas (PNI) e identificadas no reclamadas (PINR)',
    descripcionCurso:
      'El manejo integral de las víctimas, en los casos de la persona fallecida no identificada e identificada no reclamada, constituye un derecho que obliga al Estado a la implementación de medidas adecuadas, diferenciadas, transformadoras y efectivas para la verdad, justicia, reparación, restitución de derechos y garantías de no repetición en todas sus dimensiones tal como lo plantea la normatividad vigente.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Marco Normativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Introducción',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Normativa nacional',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: ' Referentes internacionales ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Personas no identificadas y personas identificadas no reclamadas en los cementerios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Persona no identificada (PNI)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Persona identificada no reclamada (PINR)',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Constitución Política de Colombia [Const]. 7 de julio de 1991 (Colombia).',
    },
    {
      referencia:
        'Decreto 1862 de 2014. [Ministerio de justicia]. Por la cual se establece el reglamento de la Comisión de Búsqueda de Personas Desaparecidas creada por la Ley 589 de 2000. Septiembre 26 de 2014.',
    },
    {
      referencia:
        'Decreto 303 de 2015. [Ministerio del interior]. Por el cual se reglamenta la Ley 1408 de 2010. Febrero 20 de 2015.',
    },
    {
      referencia:
        'Decreto 4800 de 2011. [Ministerio de justicia]. Por la cual se reglamenta la Ley 1448 de 2011 y se dictan otras disposiciones. Diciembre 20 de 2011.',
    },
    {
      referencia:
        'Decreto 589 de 2017. [Instituto Nacional de Medicina Legal y Ciencias Forenses]. Por el cual se organiza la Unidad de Búsqueda de Personas dadas por desaparecidas en el contexto y debido al conflicto armado. Abril 05 de 2017.',
    },
    {
      referencia:
        'Directiva 006 del 7 mayo 2018. [Procuraduría General de la Nación]. Instrucciones a los funcionarios del Ministerio público sobre el seguimiento a los procedimientos para garantizar y facilitar la búsqueda de personas desaparecidas.',
    },
    {
      referencia:
        'Gómez, J. (2010). Tratado de derecho Constitucional. Editorial Ariadna.',
    },
    {
      referencia:
        'Ley 1408 de 2010. Por medio de la cual se rinde homenaje a las víctimas del delito de desaparición forzada y se dictan medidas para su localización e identificación. Agosto 20 de 2010. DO. N° N/A.',
    },
    {
      referencia:
        'Ley 1448 de 2011. Por la cual se dictan medidas de atención, asistencia y reparación integral a las víctimas del conflicto armado interno y se dictan otras disposiciones. Junio 10 de 2011. DO. N° 48.096.',
    },
    {
      referencia:
        'Ley 38 de 1993. Por la cual se unifica el sistema de dactiloscopia y se adopta la Carta Dental para fines de identificación. Enero 15 de 1993. DO. N°40.724.',
    },
    {
      referencia:
        'Ley 589 de 2000. Por medio de la cual se tipifica el genocidio, la desaparición forzada, el desplazamiento forzado y la tortura; y se dictan otras disposiciones. Julio 6 de 2000. DO. N° 44.073.',
    },
    {
      referencia:
        'Ley 589 de 2000. Por medio de la cual se tipifica el genocidio, la desaparición forzada, el desplazamiento forzado y la tortura; y se dictan otras disposiciones. Julio 6 de 2000. DO. N° 44.073.',
    },
    {
      referencia:
        'Ley 9 de 1979. Por la cual se dictan Medidas Sanitarias. Enero 24 de 1979. DO. N° 35.193.',
    },
    {
      referencia:
        'Ley 971 de 2005. Por medio de la cual se reglamenta el mecanismo de búsqueda urgente y se dictan otras disposiciones. Julio 14 de 2005. DO. N° 45.970.',
    },
    {
      referencia:
        'Resolución 1447 de 2009. [Ministerio de protección social]. Por la cual se reglamenta la prestación de los servicios de cementerios, inhumación, exhumación y cremación de cadáveres. Mayo 11 de 2009.',
    },
    {
      referencia:
        'Resolución 248 de 2001. [Instituto Nacional de Medicina Legal y Ciencias Forenses]. Por la cual se dictan unas disposiciones para el funcionamiento de la Red para la identificación de cadáveres. Mayo 02 de 2001.',
    },
  ],
  glosario: [
    {
      termino: 'Adipocira',
      significado:
        'grasa producida por la descomposición de cadáveres sumergidos en agua o sepultados en terreno húmedo.',
    },
    {
      termino: 'Cadáver',
      significado:
        'cuerpo humano sin vida, en cualquier estado, fresco, descompuesto o conservado, momificado o adipocira, esquelético o mixto, completo o incompleto.  Debe estar certificado previamente a su inhumación o disposición final.',
    },
    {
      termino: 'Cementerio',
      significado:
        'ugar destino para recibir, alojar los cadáveres y restos humanos, en cualquiera de los espacios adecuados para ello.',
    },
    {
      termino: 'Custodia',
      significado: 'guardar algo con cuidado y vigilancia.',
    },
    {
      termino: 'Derechos Humanos',
      significado:
        'son aquellas condiciones instrumentales que le permiten a la persona su realización. En consecuencia, subsume aquellas libertades, facultades, instituciones o reivindicaciones relativas a bienes primarios o básicos​ que incluyen a toda persona, por el simple hecho de su condición humana, para la garantía de una vida digna, sin distinción alguna de raza, color, sexo, idioma, religión, opinión política o de cualquier otra índole, origen nacional o social, posición económica o cualquier otra condición. (Gómez, 2010).',
    },
    {
      termino: 'Fenotípicas',
      significado:
        'manifestación variable del genotipo de un organismo en un determinado ambiente.',
    },
    {
      termino: 'Genotípicas',
      significado:
        'conjunto de genes de un individuo, de acuerdo con su composición alélica.',
    },
    {
      termino: 'Individualización',
      significado:
        'especificar, distinguir una cosa de otras por cualidades peculiares. Distinguir un individuo de otros de la especie.',
    },
    {
      termino: 'NN',
      significado:
        'hace referencia a Nomen Nescio, una expresión latina que significa “desconozco el nombre” y en nuestro contexto aún es usado para denominar aquellas personas que han muerto y de las cuales desconocemos su procedencia, nombre u otro rasgo que permita su identificación.',
    },
    {
      termino: 'Normativa',
      significado:
        'disposición de leyes y decretos que fundamentan una actividad.',
    },
    {
      termino: 'PINR',
      significado: 'Personas Identificadas No Reclamadas.',
    },
    {
      termino: 'PNI',
      significado: 'Persona No Identificada.',
    },
  ],
  complementario: [
    {
      texto:
        'Ministerio de Salud y Protección Social. (2020). Orientaciones para el manejo, traslado y disposición final de cadáveres por SARS-COV-2 (COVID-19).',
      tipo: 'Guía',
      descarga: '/downloads/manejo-cadaveres-covid-19f.pdf',
    },
    {
      texto:
        'Decreto 303 de 2015. [Ministerio del interior]. Por el cual se reglamenta la Ley 1408 de 2010. Febrero 20 de 2015.',
      tipo: 'Decreto',
      descarga: '/downloads/decreto_303_de_2015_0.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
