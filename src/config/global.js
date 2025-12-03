export default {
  global: {
    componenteFormativo:
      'Identificación y visibilización de los tesoros del territorio',
    descripcionCurso:
      'Este componente formativo desarrolla las capacidades para identificar y visibilizar los tesoros del territorio mediante el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. Promueve el reconocimiento de recursos locales, la construcción del sueño colectivo y la formulación de productos estratégicos que fortalezcan la identidad comunitaria y el desarrollo local sostenible mediante procesos participativos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tesoros para el desarrollo local endógeno',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Representatividad sociocultural de los tesoros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Criterios de valoración',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ideación de producto estrella',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Marca',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Componentes',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Marca Territorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Estrategia de marca territorial',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Sueño colectivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo:
              'Definición bajo el enfoque Mi Pueblo, Mi Producto, Mi Orgullo',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Características',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Componentes',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: '#[i Backcasting]',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Pasos',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Acciones de visibilización del territorio',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Promoción territorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Concepto',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Elementos',
            hash: 't_8_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
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
  complementario: [
    {
      tema:
        'Empoderamiento de la comunidad rural a través de la exploración de los recursos locales.',
      referencia: 'JICA. 2025. Agricultural and Rural Development IRODORI.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0e0Piubx1SM',
    },
    {
      tema: 'Marca Territorial desde el enfoque OVOP',
      referencia:
        'Agricultural and Rural Development. Movimiento “Un Pueblo, Un Producto” (OVOP).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=88qXVJnp03M&t=69s',
    },
    {
      tema: 'Marca País',
      referencia: 'Marca Colombia',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=H_VU0Z4kD68',
    },
    {
      tema:
        'Tienda de Productos Locales como estrategia de visibilización y comercialización de los tesoros locales',
      referencia:
        'Municipalidad de Orotina. 2021. Mercadito OVOP. Casa de Turismo Cultural de Puerto Limón',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=3N6tEnRkke0&list=PLZ9z6MOt01wZdzXfeTX5MVNs0ih6Y0bsI',
    },
    {
      tema: 'Elementos de la Identidad de Marca',
      referencia: 'Barra, Cristobal (s.f.). Elementos de la Identidad de Marca',
      tipo: 'Artículo',
      link:
        'https://rsu.fen.uchile.cl/wp-content/uploads/2024/06/Elementos-claves-de-la-identidad-de-marca.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Sueño colectivo',
      significado:
        'visión compartida del futuro del territorio que orienta las acciones de desarrollo local y moviliza a la comunidad.',
    },
    {
      termino: '<em>Backcasting</em>',
      significado:
        'método de planificación que parte del futuro deseado para definir los pasos necesarios para alcanzarlo desde el presente.',
    },
    {
      termino: 'Promoción territorial',
      significado:
        'conjunto de acciones destinadas a visibilizar, posicionar y dinamizar los recursos, productos y atractivos de un territorio.',
    },
    {
      termino: 'Desarrollo local endógeno',
      significado:
        'enfoque de desarrollo que se construye desde las capacidades, recursos y decisiones de la comunidad.',
    },
    {
      termino: 'Identidad territorial',
      significado:
        'conjunto de símbolos, prácticas y valores que expresan quiénes son los habitantes de un territorio y qué los distingue.',
    },
    {
      termino: 'Atractivos locales',
      significado:
        'bienes, lugares, prácticas o manifestaciones culturales que generan interés por su valor único o distintivo.',
    },
    {
      termino: '<em>marketing</em> territorial',
      significado:
        'estrategias para posicionar un territorio en función de su identidad, productos y oportunidades.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'documento que organiza actividades, responsables y tiempos para alcanzar metas del desarrollo local.',
    },
    {
      termino: 'Comité OVOP',
      significado:
        'grupo de actores locales encargados de coordinar, apoyar y dar continuidad a los procesos OVOP en el territorio.',
    },
    {
      termino: 'Productos y servicios del territorio',
      significado:
        'bienes y experiencias que representan la identidad local y pueden ser potenciados en procesos OVOP.',
    },
  ],
  referencias: [
    {
      referencia:
        'Copymate. 2024. marketing territorial - promoción de regiones como elemento de estrategias de desarrollo local.',
      link:
        'https://copymate.app/es/blog/multi/marketing-territorial-promocion-de-regiones-como-elemento-de-estrategias-de-desarrollo-local/#:~:text=En%20el%20%C3%A1mbito%20del%20marketing%20territorial%2C%20las,la%20efectividad%20de%20las%20acciones%20de%20promoci%C3%B3n.',
    },
    {
      referencia:
        'Esic University. 2024. Método SCAMPER: ¿qué es y cómo podemos aplicarlo?.',
      link:
        'https://www.esic.edu/rethink/marketing-y-comunicacion/que-es-metodo-scamper-como-aplicarlo-c',
    },
    {
      referencia: 'FJ Intelligence. (s.f.). Backcasting.',
      link: 'https://fjintelligence.com/terminos/backcasting/',
    },
    {
      referencia:
        'Gómez Camargo, A. C. (2015). Elementos del marketing territorial que intervienen en las marcas regionales y los productos con denominación de origen.',
      link: '',
    },
    {
      referencia:
        'SENA, JICA. 2020. OVOP COLOMBIA Estrategia de desarrollo local incluyente.',
      link: 'https://www.sena.edu.co/es-co/sena/Paginas/ovop_colombia.aspx',
    },
    {
      referencia: 'SENA, JICA. 2020. Guía para la Ideación de Producto.',
      link: 'https://www.sena.edu.co/es-co/sena/Paginas/ovop_colombia.aspx',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leidi Paola Mulcué Vitopía',
          cargo: 'Instructora',
          centro: 'Centro Nacional de Hotelería, Turismo y Alimentos',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Daniel Polanco',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Junior Rodriguez Rodriguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
