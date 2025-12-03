<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Tesoros para el desarrollo local endógeno
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img01.svg' alt="Imagen decorativa" style="max-width:75px")
          br
          | La identificación de los tesoros locales y su vinculación con la historia, la cultura y las prácticas tradicionales permite fortalecer el orgullo comunitario, afianzar la identidad del territorio y promover la apropiación social. Reconocer estos tesoros facilita que las comunidades visualicen oportunidades de desarrollo, fortalezcan la confianza entre actores locales y articulen esfuerzos hacia una visión compartida del futuro.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Concepto
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Los tesoros locales son elementos propios de un territorio, reconocidos por la comunidad como valiosos para su vida social, económica y cultural. Estos pueden manifestarse como recursos naturales, recursos culturales, productos o servicios representativos, saberes tradicionales, prácticas comunitarias, personajes significativos o expresiones simbólicas que dan sentido a la identidad del lugar.
        .tarjeta.BG02.p-4.mb-4
          .row.justify-content-center
            .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img02.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 Pueden ser tangibles o intangibles. Entre los tangibles se encuentran bienes naturales, espacios significativos o productos con valor histórico, mientras que entre los intangibles se incluyen conocimientos ancestrales, leyendas locales, memorias colectivas, festividades, expresiones artísticas o prácticas transmitidas entre generaciones.
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img03.png' alt="Imagen decorativa")
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Tipos de tesoros
    
    p.mb-5 Los tesoros del territorio pueden agruparse en las siguientes categorías:

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG01.p-4.h-100
          .row.justify-content-center.mb-4
            .col-lg-4.col-sm-6.col-3
              img(src='@/assets/curso/tema1/img04.svg' alt="Imagen decorativa")
          .h5 Recursos naturales
          p.mb-0 Elementos del entorno natural que por su belleza, singularidad, fragilidad ecológica o significado cultural adquieren valor para la comunidad, como montañas, ríos, lagunas, bosques, humedales, cascadas, valles o paisajes emblemáticos.
      .col-lg-4.col-sm-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta.BGIMG01.p-4.h-100
          .row.justify-content-center.mb-4
            .col-lg-4.col-sm-6.col-3
              img(src='@/assets/curso/tema1/img05.svg' alt="Imagen decorativa")
          .h5 Recursos productivos
          p.mb-0 Actividades, prácticas y sistemas productivos que caracterizan la vocación económica del territorio, como la agricultura, la transformación de alimentos, la producción artesanal, los oficios tradicionales o los encadenamientos productivos locales.
      .col-lg-4.col-sm-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG01.p-4.h-100
          .row.justify-content-center.mb-4
            .col-lg-4.col-sm-6.col-3
              img(src='@/assets/curso/tema1/img06.svg' alt="Imagen decorativa")
          h5 Recursos culturales
          p.mb-0 Bienes materiales e inmateriales que constituyen la memoria, la identidad y los sentidos de pertenencia del territorio.

    p.mb-5 Dentro de los recursos culturales se consideran:

    .BGIMG02.px-md-5.px-4.mb-4
      .row.justify-content-center
        .col-lg-5.col-sm-8.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img07.png' alt="Imagen decorativa")
          .BG01.BRI.p-4
            p.mb-0 #[strong Patrimonio material]: bienes físicos perceptibles sensorialmente, como arquitectura tradicional, monumentos, lugares históricos, plazas, caminos o construcciones representativas.
        .col-lg-5.col-sm-8.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img08.png' alt="Imagen decorativa")
          .BG01.BRI.p-4
            p.mb-0 #[strong Patrimonio inmaterial]: tradiciones orales, prácticas sociales, rituales, actos festivos, conocimientos sobre la naturaleza y el universo, expresiones artísticas o saberes ancestrales que se transmiten de generación en generación.
        .col-lg-5.col-sm-8.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img09.png' alt="Imagen decorativa")
          .BG01.BRI.p-4
            p.mb-0 #[strong Festividades]: celebraciones colectivas en las que la comunidad expresa sus prácticas culturales, creencias, valores y tradiciones.
        .col-lg-5.col-sm-8.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img10.png' alt="Imagen decorativa")
          .BG01.BRI.p-4
            p.mb-0 #[strong Grupos de especial interés]: comunidades indígenas, negras y raizales que aportan cosmovisiones, formas organizativas y prácticas culturales fundamentales para el territorio.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Características de los tesoros
    
    p.mb-5 Los tesoros locales poseen atributos que los hacen relevantes para la comunidad y útiles en procesos de desarrollo. Entre sus características principales se encuentran:

    .row.justify-content-center.mb-4
      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.color-primario.p-4.h-100
          .row.mb-4
            .col-sm-4.col-3
              img(src='@/assets/curso/tema1/img11.svg' alt="Imagen decorativa")
          p.mb-0 #[strong Valor local]: representan elementos significativos para la vida cultural, histórica y social del territorio.
      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta.color-primario.p-4.h-100
          .row.mb-4
            .col-sm-4.col-3
              img(src='@/assets/curso/tema1/img12.svg' alt="Imagen decorativa")
          p.mb-0 #[strong Unicidad]: son distintivos y propios del lugar, lo que los hace especiales frente a otros territorios.
      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta.color-primario.p-4.h-100
          .row.mb-4
            .col-sm-4.col-3
              img(src='@/assets/curso/tema1/img13.svg' alt="Imagen decorativa")
          p.mb-0 #[strong Sostenibilidad]: requieren un manejo responsable que permita su preservación y continuidad en el tiempo.
      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.color-primario.p-4.h-100
          .row.mb-4
            .col-sm-4.col-3
              img(src='@/assets/curso/tema1/img14.svg' alt="Imagen decorativa")
          p.mb-0 #[strong Potencial económico]: pueden generar oportunidades de desarrollo mediante el turismo, la comercialización de productos, la creación de rutas temáticas o la dinamización de servicios locales.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Mapa de tesoros
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img15.png' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        p Un mapa de tesoros es una representación gráfica del territorio que permite ubicar, organizar y visibilizar los elementos más relevantes del contexto local. Este instrumento facilita la comprensión del territorio, la planificación de acciones, la gestión comunitaria y el fortalecimiento de la identidad.
        p Un mapa puede incluir información relacionada con:
        .tarjeta.BG01.p-3
          .row.justify-content-center.align-items-center
            .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img16.svg' alt="Imagen decorativa")
            .col-lg-10
              ul.lista-ul--color.mb-0
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  p.mb-0 #[strong Ubicación] coordenadas geográficas, límites y fronteras.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  p.mb-0 #[strong Topografía]: relieve, montañas, valles y ríos.
                li(style="margin-bottom: 2px")
                  i.fas.fa-circle-notch
                  p.mb-0 #[strong Infraestructura]: carreteras, ciudades, centros poblados, edificaciones o equipamientos comunitarios.

    p.mb-5 Asimismo, el mapa permite identificar y localizar los tesoros del territorio, tales como:

    .tarjeta.BG02.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4
          img.w-75.m-auto(src='@/assets/curso/tema1/img17.svg' alt="Imagen decorativa")
        .col-lg-10
          ul.lista-ul--color.mb-0
            li(style="margin-bottom: 2px")
              i.fas.fa-circle-notch
              p.mb-0 #[strong Tesoros naturales]: ríos, bosques, lagos, montañas, humedales, cascadas y otros elementos ambientales de valor.
            li(style="margin-bottom: 2px")
              i.fas.fa-circle-notch
              p.mb-0 #[strong Tesoros culturales]: sitios históricos, monumentos, festividades, manifestaciones culturales y espacios simbólicos significativos para la comunidad.
            li(style="margin-bottom: 2px")
              i.fas.fa-circle-notch
              p.mb-0 #[strong Tesoros productivos]: cultivos representativos, zonas agrícolas, sistemas de transformación y productos emblemáticos del territorio.



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),
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
