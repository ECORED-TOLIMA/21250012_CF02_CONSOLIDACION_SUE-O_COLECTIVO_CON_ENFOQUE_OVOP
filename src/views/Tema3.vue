<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Ideación de producto estrella

    .row.justify-content-center.mb-4
      .col-lg-3.col-sm-4.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img01.png' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        .tarjeta.BG01.p-4.mb-4
          p.mb-0 La ideación de un producto estrella busca que la comunidad, mediante un proceso participativo, identifique oportunidades de productos o servicios basados en los recursos disponibles del territorio. Esta etapa permite convertir los tesoros locales en propuestas concretas que contribuyan al sueño colectivo, al fortalecimiento de la identidad territorial y al desarrollo endógeno.
        p.mb-0 Idear un producto estrella implica observar el territorio desde perspectivas creativas, comprender las necesidades y aspiraciones de la comunidad, y estimular la imaginación colectiva para transformar los recursos en soluciones innovadoras, sostenibles y representativas.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Concepto
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p La idea es un medio para entregar un pensamiento, una forma o una experiencia nueva a las personas. Ese elemento novedoso es esencial para detonar procesos de innovación comunitaria. La generación de ideas no es exclusiva de profesionales o especialistas: #[strong cualquier persona puede crear ideas valiosas], siempre que exista la preparación adecuada.
        .tarjeta.BG02.p-3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-10.order-lg-1.order-2
              p.mb-0 Una mente preparada observa de manera profunda, identifica conexiones entre conocimientos previos y reconoce oportunidades que otros podrían pasar por alto. En este sentido, la creatividad se alimenta de la experiencia, la observación, la acumulación de saberes y la interacción con el territorio.
            .col-lg-2.col-sm-3.col-4.order-lg-2.order-2.mb-lg-0.mb-4
              img(src='@/assets/curso/tema3/img02.svg' alt="Imagen decorativa")
        p.mb-0 Las semillas de ideas se utilizan para visualizar la estructura del pensamiento creativo. Estas constan de cuatro componentes:
      .col-lg-3.col-sm-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img03.svg' alt="Imagen decorativa")

    .row.justify-content-center.mb-4
      .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4.px-0(data-aos="fade-right")
        .BG03.px-2.h-100
          img(src='@/assets/curso/tema3/img04.svg' alt="Imagen decorativa")
      .col-lg-8.px-0(data-aos="fade-left")
        .BG01.p-4.h-100
          ul.lista-ul--color.mb-0
            li(style="margin-bottom: 2px")
              i.fas.fa-circle-notch
              p.mb-0 #[strong #[i Target]]: para quién es la idea.
            li(style="margin-bottom: 2px")
              i.fas.fa-circle-notch
              p.mb-0 #[strong Problema]: qué se quiere solucionar con la idea.
            li(style="margin-bottom: 2px")
              i.fas.fa-circle-notch
              p.mb-0 #[strong Recursos]: con qué se soluciona, ya sean productos, servicios, modelos u otros elementos disponibles.
            li(style="margin-bottom: 2px")
              i.fas.fa-circle-notch
              p.mb-0 #[strong Solución]: cómo se soluciona, es decir, el medio o la forma de resolver el problema identificado.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Técnica SCAMPER
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La técnica SCAMPER, desarrollada por Bob Eberlee, es una herramienta creativa utilizada para generar ideas, resolver problemas, mejorar productos y estimular la innovación. Surge como una mejora a la lista de verificación de Alex Osborne, creador del método de lluvia de ideas.
        .row.justify-content-center.mb-4
          .col-lg-2.d-lg-flex.d-none
            img(src='@/assets/curso/temas/img01.svg' alt="Imagen decorativa")
          .col-lg-10
            p.mb-0 SCAMPER permite analizar un producto, servicio o proceso desde siete acciones estratégicas: sustituir, combinar, adaptar, modificar, poner en otros usos, eliminar y reorganizar. Este enfoque invita a mirar los recursos del territorio desde nuevas perspectivas y descubrir posibilidades que pueden transformarse en productos estrella para la comunidad.
        p.mb-0 A continuación, se presenta la tabla correspondiente con las preguntas guía para cada una de las acciones SCAMPER:
      .col-lg-4.col-sm-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img05.png' alt="Imagen decorativa")

    .titulo-sexto.color-secundario(data-aos="fade-right")
      h5 Tabla 1.
      i Preguntas orientadoras SCAMPER
    .tabla-a.color-acento-contenido
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        caption Fuente. <span style="font-weight: 400">SENA, JICA. 2020. Guía para la Ideación de Producto. Pág. 10</span>
        thead(style="border-color: transparent")
        tbody 
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6; width: 30%;") #[i Substitute] / Sustituir
            td(style="background-color: #F6F6F6; width: 70%;")
              p.mb-2 ¿Qué puedes sustituir para bajar costos?
              p.mb-2 ¿Qué no puedes sustituir?
              p.mb-2 ¿Cómo puedes sustituir un recurso?
              p.mb-0 ¿Qué elemento puedes sustituir para eliminar complejidad del sistema?
          tr(data-aos="fade-right")
            th #[i Combine] / Combinar
            td
              p.mb-2 ¿Qué puedes combinar internamente?
              p.mb-2 ¿Qué puedes combinar con un factor externo?
              p.mb-0 ¿Qué combinación de elementos generaría una reducción de costos?
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") #[i Adapt] / Adaptar
            td(style="background-color: #F6F6F6;")
              p.mb-2 ¿Cómo lo puedes adaptar para agregar otra función?
              p.mb-0 ¿Qué puedes adaptar para que esté disponible a una mayor cantidad de personas?
          tr(data-aos="fade-right")
            th #[i Modify] / Modificar
            td
              p.mb-2 ¿Modificando qué atributo puedes disminuir la necesidad de un recurso?
              p.mb-2 ¿Qué aplicación puede ser modificada para reducir costos de mantenimiento?
              p.mb-0 ¿Qué aplicación puede ser modificada para reducir costos?
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") #[i Put on other uses] / Poner en otros usos
            td(style="background-color: #F6F6F6;")
              p.mb-2 ¿Qué otro uso se le puede dar?
              p.mb-0 ¿Con cuál otro uso el objeto sería comercialmente apto para un mayor número de personas?
          tr(data-aos="fade-right")
            th #[i Eliminate] / Eliminar
            td
              p.mb-2 ¿Qué función puede ser eliminada?
              p.mb-2 ¿Qué función no puede ser eliminada?
              p.mb-0 Si eliminas un atributo como el color, ¿el costo disminuye?
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6;") #[i Rearrange] / Reformar
            td(style="background-color: #F6F6F6;")
              p.mb-2 ¿Puedes hacerlo más grande/pequeño? ¿Puedes hacerlo más ligero/pesado?
              p.mb-2 ¿Cómo lo cambiarías para que ocupe menos espacio físico?
              p.mb-0 Si reorganizas algunos pasos ¿el proceso tendría menores posibilidades de fallos?

</template>

<script>
export default {
  name: 'Tema3',
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
