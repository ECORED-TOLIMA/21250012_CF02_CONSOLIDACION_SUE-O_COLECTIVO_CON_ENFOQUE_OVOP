<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema:
        'Reconociendo los tesoros y la identidad territorial con enfoque OVOP',
      titulo: 'Cuestionario',
      introduccion:
        'Evaluar la comprensión de los aprendices sobre los conceptos clave del componente, tesoros locales, representatividad sociocultural, ideación de producto estrella, marca y marca territorial, sueño colectivo, <em>backcasting</em> y promoción territorial, mediante preguntas y ejercicios que fortalezcan su capacidad para identificar, valorar y proyectar los elementos distintivos del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'Los tesoros locales pueden ser recursos naturales, recursos culturales, productos o servicios que posean un valor importante para la comunidad, para su forma de vida, su economía interna y su dinámica social.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: 'Los tesoros locales se clasifican en tipo A, tipo B y tipo C',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'El mapa de tesoros locales es una representación gráfica de un territorio o área geográfica, que muestra sus características físicas, humanas y tesoros naturales, culturales y productivos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Los criterios de valoración de los tesoros locales son: uso, unicidad, dueño y participación.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La ideación de producto estrella es un proceso participativo, donde se generen ideas, es decir, la comunidad identifica posibilidades de producto a partir de los recursos disponibles en su territorio.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '<em>Target</em>, problema, recursos y solución son los componentes del sueño colectivo.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'SCAMPER, es una técnica creativa de generación de ideas utilizada para resolver problemas, mejorar productos y procesos, y estimular la innovación en cualquier área.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'La palabra SCAMPER, es un acrónimo que representa siete acciones (sustituir, combinar, adaptar, modificar, proponer otros usos, eliminar y reorganizar)',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Los elementos de marca más utilizados: nombre de la marca, símbolo (o logotipo e isotipo), <em>slogan</em> (o <em>tagline</em>), personajes asociados, <em>jingles</em> o melodías publicitarias y en muchos casos algunos olores, colores, tipos de letra y otros elementos secundarios.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'La marca territorial es una herramienta que facilita el posicionamiento de la imagen territorial, la cual refleja la aspiración de un territorio; esto es, cómo quieren las personas que sea su territorio y cómo quieren que la gente, afuera de ese territorio, lo reconozca',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'La marca territorial, contribuye al aumento de la cohesión social y a la diferenciación productiva, aspecto que estimula la atracción de consumidores habituales de esos productos y, en definitiva, al desarrollo económico local.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Comentario respuesta correcta	¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'La estrategia de marca territorial es una herramienta muy importante que permite establecer el objetivo de OVOP en el nivel departamental, definir las pautas para seleccionar productos y apoyar la implementación en el nivel local.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'El sueño colectivo representa el objetivo central que una persona se traza para trabajar alrededor de un producto.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Participación comunitaria, identidad y orgullo, desarrollo sostenible, autogestión y creatividad, enfoque en productos locales, son las características claves del sueño colectivo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Los componentes del sueño colectivo son: autonomía, desconfianza, creatividad, innovación y participación.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '<em>Backcasting</em> es un método de planificación estratégica y prospectiva que parte del futuro deseado para definir los pasos necesarios que permitirían alcanzarlo.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Comentario respuesta correcta	¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'El proceso de <em>backcasting</em> se desarrolla en cuatro fases: 1. Definir el futuro objetivo, 2. analizar el presente, 3. diseñar el recorrido inverso, 4. construir la hoja de ruta.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'La promoción territorial se refiere a las estrategias y acciones implementadas para fomentar el desarrollo económico, social y cultural de una región o territorio específico.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Los elementos clave para la promoción territorial: identificación de atractivos únicos (culturales, naturales, gastronómicos, etc.), articulación de actores (público, comunitario y privado) y uso de instrumentos de planificación y gestión.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Las herramientas para la promoción territorial son: plan de desarrollo territorial, marketing territorial, sitio web, redes sociales, publicidad, eventos y ferias.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Buen trabajo! Se evidencia una comprensión adecuada de los contenidos del componente formativo Identificación y visibilización de los tesoros del territorio. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
