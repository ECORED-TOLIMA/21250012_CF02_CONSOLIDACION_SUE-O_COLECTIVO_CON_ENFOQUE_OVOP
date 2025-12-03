<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo desarrolla los elementos esenciales para definir, valorar y visibilizar los tesoros del territorio desde el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia. Su propósito es fortalecer las capacidades comunitarias para reconocer los recursos locales —naturales, culturales y productivos— y convertirlos en oportunidades de desarrollo incluyente y sostenible.
    p El proceso inicia con la identificación y clasificación de los tesoros, así como su representación en mapas que facilitan la apropiación territorial y la planificación comunitaria. Luego, se analiza su representatividad sociocultural, aplicando criterios como uso, unicidad, carácter comunitario y participación.
    p Posteriormente, se aborda la ideación del producto estrella, a través de herramientas creativas como las semillas de ideas y la técnica SCAMPER, que permiten generar propuestas innovadoras basadas en las potencialidades del territorio.
    p El componente también integra conceptos clave de marca y marca territorial, fundamentales para posicionar el territorio, fortalecer la identidad colectiva y dinamizar la economía local. Asimismo, introduce el sueño colectivo como visión compartida que orienta la acción comunitaria, y el método de #[i Backcasting] para planificar estratégicamente desde el futuro deseado hacia el presente.
    p Finalmente, se presentan elementos y herramientas de promoción territorial, indispensables para visibilizar los tesoros, articular actores y elevar la calidad de vida mediante estrategias de comunicación y desarrollo local.

    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Diagrama que organiza los contenidos del componente Identificación y visibilización de los tesoros del territorio a través de ocho temas: tesoros para el desarrollo local endógeno, representatividad sociocultural, ideación de producto estrella, marca, marca territorial, sueño colectivo, backcasting y promoción territorial. Cada tema despliega sus subtemas principales, como concepto, tipos, criterios de valoración, componentes, estrategia de marca territorial, características, pasos y acciones de visibilización. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
