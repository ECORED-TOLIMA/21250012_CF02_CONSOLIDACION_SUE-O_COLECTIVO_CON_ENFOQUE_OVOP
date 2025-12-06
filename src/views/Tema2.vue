<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Representatividad sociocultural de los tesoros
    
    .row.justify-content-center.mb-4
      .col-lg-3.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img01.png' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        p La representatividad sociocultural de los tesoros locales se relaciona con el significado que estos elementos tienen para la comunidad, su capacidad para fortalecer la identidad territorial y su potencial para dinamizar procesos de desarrollo. Los tesoros no solo aportan valor económico: también movilizan emociones, memorias, prácticas colectivas y narrativas que consolidan el tejido social y permiten a la comunidad reconocerse a sí misma a través de sus recursos singulares.
        .tarjeta.BG02.p-3
          .row.justify-content-center.align-items-center
            .col-lg-10.order-lg-1.order-2
              p.mb-0 Comprender la representatividad sociocultural implica analizar cómo los tesoros se conectan con la historia del territorio, las prácticas cotidianas, los saberes heredados y las aspiraciones comunitarias. A partir de este reconocimiento, los tesoros pueden convertirse en herramientas estratégicas para revitalizar la economía local, impulsar el orgullo territorial y promover la cohesión comunitaria.
            .col-lg-2.col-sm-3.col-4.order-lg-2.order-2.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img02.svg' alt="Imagen decorativa")

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Concepto

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Los tesoros locales pueden aprovecharse para generar conciencia, sentido de pertenencia y capital social dentro del territorio. Su identificación y valorización contribuyen a que las comunidades reconozcan su propia riqueza cultural, productiva y ambiental. Al mismo tiempo, cuando un territorio ya posee capital social consolidado, este facilita el (re)descubrimiento de tesoros o productos con potencial para convertirse en elementos emblemáticos o “estrellas” del desarrollo local.
        .row.justify-content-center.mb-4
          .col-lg-2.d-lg-flex.d-none
            img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
          .col-lg-10
            p.mb-0 Los ciudadanos pueden convertirse en promotores de los productos únicos del territorio, y estos productos, a su vez, pueden funcionar como herramientas de promoción territorial. De esta manera, los tesoros fortalecen el reconocimiento de la comunidad y contribuyen a mejorar la competitividad y la proyección del territorio.
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img03.png' alt="Imagen decorativa")

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Criterios de valoración
    
    p.mb-5 Para analizar la representatividad sociocultural de los tesoros locales, se recomienda evaluar los recursos mediante criterios que permitan identificar su valor, singularidad y potencial comunitario. Entre estos criterios se encuentran:

    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.BGIMG01.p-4.h-100
          .row.justify-content-center.mb-4
            .col-sm-4.col-3
              img(src='@/assets/curso/tema2/img04.svg' alt="Imagen decorativa")
          p.mb-0 #[strong Uso]: se refiere a la amplitud de funciones o utilidades que posee el tesoro, es decir, su versatilidad y capacidad de aprovechamiento por parte de la comunidad.
      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta.BGIMG01.p-4.h-100
          .row.justify-content-center.mb-4
            .col-sm-4.col-3
              img(src='@/assets/curso/tema2/img05.svg' alt="Imagen decorativa")
          p.mb-0 #[strong Unicidad]: considera si el tesoro es único en la región, en el país o incluso a nivel internacional, lo que le otorga un alto valor diferenciador.
      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta.BGIMG01.p-4.h-100
          .row.justify-content-center.mb-4
            .col-sm-4.col-3
              img(src='@/assets/curso/tema2/img06.svg' alt="Imagen decorativa")
          p.mb-0 #[strong Dueño]: examina si el recurso, producto o manifestación es de carácter comunitario o de uso público, lo cual favorece su apropiación colectiva.
      .col-lg-3.col-sm-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.BGIMG01.p-4.h-100
          .row.justify-content-center.mb-4
            .col-sm-4.col-3
              img(src='@/assets/curso/tema2/img07.svg' alt="Imagen decorativa")
          p.mb-0 #[strong Participación]: analiza si el tesoro puede ser aprovechado, gestionado o disfrutado por un número significativo de personas del territorio, promoviendo así el beneficio colectivo y la cohesión social.

</template>

<script>
export default {
  name: 'Tema2',
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
