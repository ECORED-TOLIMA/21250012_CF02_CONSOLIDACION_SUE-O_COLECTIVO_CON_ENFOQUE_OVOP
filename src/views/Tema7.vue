<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 7
      h1 #[i Backcasting]
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img01.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El #[strong #[i Backcasting]] es un método de planificación estratégica que parte de una visión futura deseada para identificar los pasos que permitirán alcanzarla. A diferencia de los enfoques prospectivos tradicionales —que proyectan tendencias actuales hacia adelante—, el #[i Backcasting] invierte el proceso: comienza con un futuro preferible y, desde allí, traza el camino hacia el presente, definiendo transformaciones, decisiones y acciones necesarias para hacerlo realidad.
    
    p Este método fue introducido en la década de 1970 por #[strong John B. Robinson], inicialmente aplicado a estudios de sostenibilidad y energía. Con el tiempo se ha consolidado como una herramienta clave para procesos de #[strong desarrollo sostenible, gobernanza, innovación pública y planificación territorial], especialmente en contextos donde las metas deseadas no pueden lograrse simplemente extrapolando el pasado.
    p El principio esencial del #[i Backcasting] es que #[strong el futuro no se predice: se construye] mediante visiones compartidas, decisiones informadas y acciones coordinadas.

    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Concepto
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p El #[i Backcasting] parte de la formulación de un futuro deseado y trabaja de manera retrospectiva para determinar qué debe ocurrir en el presente y en el mediano plazo para hacerlo posible. En el enfoque OVOP, esta herramienta resulta fundamental porque permite articular el sueño colectivo con acciones realistas, alcanzables y orientadas al desarrollo local incluyente.
        .tarjeta.BG02.p-4.mb-4(data-aos="fade-right")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4
              img.w-75.m-auto(src='@/assets/curso/tema7/img02.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 La siguiente figura ilustra la diferencia metodológica entre #[i Backcasting] y forecasting, mostrando cómo cada enfoque relaciona el presente con los posibles futuros dentro de los procesos de planificación del desarrollo territorial.
      .col-lg-3.col-sm-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema7/img03.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 2.
          i Comparación entre Backcasting y forecasting en procesos de planificación.
        figure(data-aos="zoom-in")
          img.d-lg-flex.d-none(src='@/assets/curso/tema7/img04.svg' alt="Diagrama comparativo que ilustra la diferencia entre backcasting y forecasting, mostrando cómo uno parte del futuro deseado hacia el presente y el otro proyecta el presente hacia posibles futuros.")
          img.d-lg-none.d-flex(src='@/assets/curso/tema7/img05.svg' alt="Diagrama comparativo que ilustra la diferencia entre backcasting y forecasting, mostrando cómo uno parte del futuro deseado hacia el presente y el otro proyecta el presente hacia posibles futuros.")
          figcaption Nota. <span style="font-weight: 400">SENA, JICA. 2020. Guía para la construcción del sueño colectivo OVOP.</span>
    
    p.mb-5 Este método facilita:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .tarjeta.BG01.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema7/img06.svg' alt="Imagen decorativa")
            .col-lg-10
              ul.lista-ul--color.mb-0
                li
                  i.fas.fa-circle-notch
                  | Romper inercias institucionales.
                li
                  i.fas.fa-circle-notch
                  | Cuestionar patrones tradicionales de desarrollo.
                li
                  i.fas.fa-circle-notch
                  | Fomentar el pensamiento innovador.
                li
                  i.fas.fa-circle-notch
                  | Promover la construcción de escenarios comunitarios deseables.
                li
                  i.fas.fa-circle-notch
                  | Traducir visiones en rutas de acción concretas.
      .col-lg-5.col-sm-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema7/img07.png' alt="Imagen decorativa")

    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Pasos
    
    p.mb-5 El proceso de #[i Backcasting] generalmente se desarrolla en #[strong cuatro fases principales]:

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.color-acento-botones(tipo="b" clase-tarjeta="tarjeta BG06" data-aos="zoom-in")
          div(titulo="Definir el futuro objetivo")
            p.mb-0 Se construye una visión normativa del territorio, expresada como un escenario deseado que refleja valores, aspiraciones y metas colectivas.
          div(titulo="Analizar el presente")
            p.mb-0 Se identifican las condiciones actuales: tendencias, capacidades, limitaciones, recursos disponibles, tensiones, oportunidades y barreras que influyen en el avance hacia la visión.
          div(titulo="Diseñar el recorrido inverso")
            p.mb-0 Partiendo del escenario futuro, se establecen hitos y transiciones claves, organizados hacia atrás en el tiempo para determinar qué cambios deben producirse y en qué secuencia.
          div(titulo="Construir la hoja de ruta")
            p.mb-0 Los hitos se consolidan en un plan de acción con actores responsables, actividades, tiempos estimados, recursos necesarios y mecanismos de seguimiento y evaluación.
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema7/img08.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-lg-1.col-2.mb-lg-0.mb-4
        img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
      .col-lg-11
        p.mb-0 El valor del #[i Backcasting] radica en que permite pensar más allá de las limitaciones presentes y construir rutas innovadoras para alcanzar un futuro deseado, especialmente útil en territorios que necesitan transformaciones profundas y colaborativas.  

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4.BG05
        img(src='@/assets/curso/temas/img02.svg' style="max-width: 32px; margin-left: -16px;")
        h4.col.ps-3.mb-0 Relación con el Plan de Acción OVOP
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Después de finalizar el proceso de #[i Backcasting], es esencial construir el Plan de Acción OVOP, herramienta de planificación participativa que aterriza la ruta diseñada por la comunidad.
        p Este plan:
        .tarjeta.BG01.p-3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema7/img09.svg' alt="Imagen decorativa")
            .col-lg-10
              ul.lista-ul--color.mb-0
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Traduce la visión y los hitos en actividades concretas.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Moviliza a los actores locales hacia el sueño colectivo.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  | Promueve la autogestión, ya que parte de lo que la comunidad puede hacer desde su propio territorio.
        p.mb-0 El Plan de Acción OVOP permite ordenar tareas, asignar responsabilidades, gestionar recursos y asegurar que las iniciativas realmente contribuyan al desarrollo local incluyente.
      .col-lg-3.col-sm-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema7/img10.png' alt="Imagen decorativa")

    separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Acciones de visibilización del territorio
    
    p Para que las estrategias de #[strong #[i marketing] territorial] trasciendan el intercambio de bienes y servicios y realmente contribuyan al mejoramiento de la calidad de vida, es necesario identificar las condiciones internas que los actores locales deben fortalecer para hacer competitivo su producto.
    p Entre estas acciones se encuentran:

    SlyderF.color-acento-botones.mb-5(columnas="col-lg-6 col-xl-4" data-aos="zoom-in")
      .tarjeta.BGIMG04.p-4
        .row.justify-content-center.mb-4
          .col-lg-8.col-6
            img(src='@/assets/curso/tema7/img11.svg' alt="Imagen decorativa")
        .h5 Fortalecimiento de capacidades organizativas
        p.mb-0 La capacidad de coordinar, tomar decisiones y gestionar iniciativas colectivas es esencial.
      .tarjeta.BGIMG04.p-4
        .row.justify-content-center.mb-4
          .col-lg-8.col-6
            img(src='@/assets/curso/tema7/img12.svg' alt="Imagen decorativa")
        .h5 Impulso a la innovación
        p.mb-0 Innovar en productos, servicios, procesos y formas de organización fortalece la competitividad territorial.
      .tarjeta.BGIMG04.p-4
        .row.justify-content-center.mb-4
          .col-lg-8.col-6
            img(src='@/assets/curso/tema7/img13.svg' alt="Imagen decorativa")
        .h5 Formalización de actividades
        p.mb-0 La formalización productiva y comercial facilita el acceso a mercados y programas de apoyo institucional.
      .tarjeta.BGIMG04.p-4
        .row.justify-content-center.mb-4
          .col-lg-8.col-6
            img(src='@/assets/curso/tema7/img14.svg' alt="Imagen decorativa")
        .h5 Capacitación técnica y comercial
        p.mb-0 Mejorar la calidad del producto o servicio, así como las habilidades de comunicación con clientes y entidades, es clave para consolidar la estrategia.
      .tarjeta.BGIMG04.p-4
        .row.justify-content-center.mb-4
          .col-lg-8.col-6
            img(src='@/assets/curso/tema7/img15.svg' alt="Imagen decorativa")
        .h5 Desarrollo de competencias comunicativas
        p.mb-0 La claridad en la comunicación con consumidores y aliados facilita la promoción efectiva del territorio.

    p Estas acciones permiten no solo visibilizar los tesoros del territorio, sino también #[strong potenciar su competitividad y posicionamiento], siempre vinculados al fortalecimiento de las capacidades locales.
    p.mb-5 A continuación se presenta un conjunto de acciones estratégicas que pueden implementarse para fortalecer la visibilidad del territorio y posicionar sus productos, servicios e identidad cultural. Estas acciones integran tanto prácticas comunitarias como herramientas de comunicación y marketing, permitiendo dinamizar la participación local y ampliar el alcance del territorio en diferentes públicos.

    .row.justify-content-center.mb-4
      .col-xl-2.col-md-6.col-6.mb-xl-0.mb-4(data-aos="flip-up")
        .BG02.p-4.h-100
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/tema7/img16.svg' alt="Imagen decorativa")
          .h5.text-center.mb-0 1. Involucrar a la actores locales
      .col-xl-2.col-md-6.col-6.mb-xl-0.mb-4(data-aos="flip-up")
        .BG02.p-3.h-100
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/tema7/img17.svg' alt="Imagen decorativa")
          .h5.text-center.mb-0 2. Definir una identidad y un mensaje claro que represente las fortalezas del lugar
      .col-xl-2.col-md-6.col-6.mb-xl-0.mb-4(data-aos="flip-up")
        .BG02.p-3.h-100
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/tema7/img18.svg' alt="Imagen decorativa")
          .h5.text-center.mb-0 3. Crear contenido valioso
      .col-xl-2.col-md-6.col-6.mb-xl-0.mb-4(data-aos="flip-up")
        .BG02.p-3.h-100
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/tema7/img19.svg' alt="Imagen decorativa")
          .h5.text-center.mb-0 4. Organizar eventos culturales, festivales gastronómicos o ferias artesanales
      .col-xl-2.col-md-6.col-6.mb-xl-0.mb-4(data-aos="flip-up")
        .BG02.p-3.h-100
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/tema7/img20.svg' alt="Imagen decorativa")
          .h5.text-center.mb-0 5. Asociarse con #[em influencers]
      
    .row.justify-content-center.mb-4
      .col-xl-2.col-md-6.col-6.mb-xl-0.mb-4(data-aos="flip-up")
        .BG02.p-3.h-100
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/tema7/img21.svg' alt="Imagen decorativa")
          .h5.text-center.mb-0 6. Usar plataformas como Instagram y Facebook, Tiktok
      .col-xl-2.col-md-6.col-6.mb-xl-0.mb-4(data-aos="flip-up")
        .BG02.p-3.h-100
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/tema7/img22.svg' alt="Imagen decorativa")
          .h5.text-center.mb-0 7. Establecer y posicionar tiendas de productos y servicios locales
      .col-xl-2.col-md-6.col-6.mb-xl-0.mb-4(data-aos="flip-up")
        .BG02.p-3.h-100
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/tema7/img23.svg' alt="Imagen decorativa")
          .h5.text-center.mb-0 8. Publicitar #[em jingles] en la emisoras radiales
      .col-xl-2.col-md-6.col-6.mb-xl-0.mb-4(data-aos="flip-up")
        .BG02.p-3.h-100
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/tema7/img24.svg' alt="Imagen decorativa")
          .h5.text-center.mb-0 9. Otros
      .col-xl-2.col-md-6.col-6.mb-xl-0.mb-4(data-aos="flip-up")
        .BG03.p-3.h-100
          img(src='@/assets/curso/tema7/img25.svg' alt="Imagen decorativa")



</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
