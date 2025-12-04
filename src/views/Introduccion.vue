<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/intro/img01.png' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        p El territorio es un espacio vivo que integra historia, identidad, recursos y relaciones sociales. Reconocerlo en su complejidad es fundamental para comprender cómo las comunidades construyen sentido, organizan su vida cotidiana y proyectan su desarrollo. En este proceso, identificar aquello que las hace únicas —sus tesoros locales— es un paso clave para fortalecer el arraigo, dinamizar la economía y consolidar iniciativas colectivas basadas en la identidad territorial.
        .tarjeta.BG01.p-4.mb-4
          .row.justify-content-center
            .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/intro/img02.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 El enfoque Mi Pueblo, Mi Producto, Mi Orgullo - OVOP Colombia propone que el desarrollo local surja desde las capacidades, recursos y saberes propios del territorio. Este enfoque invita a las comunidades a identificar sus tesoros, valorarlos, clasificarlos y conectarlos con procesos de branding territorial, #[i marketing], liderazgo comunitario y planificación estratégica, de manera que puedan proyectarse hacia un futuro construido colectivamente.
        p.mb-0 Caracterizar el territorio implica analizar sus dimensiones socioculturales, económicas, ambientales y políticas, así como comprender la representatividad de los tesoros locales y su potencial para generar bienestar. También requiere reconocer las narrativas y símbolos que fortalecen la identidad comunitaria y que dan origen a marcas territoriales coherentes con la historia y los valores del lugar.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Este componente formativo guía al aprendiz en la identificación de tesoros locales, la comprensión del sueño colectivo, la aplicación del enfoque #[i Backcasting] para diseñar acciones estratégicas, y la vinculación entre marca territorial y desarrollo comunitario. A través de un enfoque práctico, participativo y contextualizado, el aprendiz desarrolla capacidades para contribuir a procesos de transformación territorial sostenibles, incluyentes y basados en el orgullo por lo propio.
        p.mb-0 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/intro/img03.png' alt="Imagen decorativa")

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
