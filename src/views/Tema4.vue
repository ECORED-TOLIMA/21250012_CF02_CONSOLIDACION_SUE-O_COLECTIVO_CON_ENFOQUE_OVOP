<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Marca
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La marca es un elemento fundamental en la construcción de identidad territorial, ya que permite diferenciar un producto, servicio o iniciativa comunitaria y proyectar su valor simbólico, cultural y económico. En contextos donde existe una amplia oferta de bienes y servicios, la marca facilita que las personas identifiquen aquello que los representa, reduciendo la incertidumbre y fortaleciendo la confianza. En el ámbito territorial, una marca bien construida contribuye a resaltar la autenticidad del territorio, vinculando sus tesoros locales con procesos de promoción, comercialización y apropiación comunitaria.
      
    
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Concepto
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p Según la Asociación Americana de Marketing (AMA), una marca es “un nombre, un término, una señal, un símbolo, un diseño, o una combinación de alguno de ellos que identifica productos y servicios de una empresa y la diferencia de los competidores”. Su función es servir como una promesa para el comprador, representando calidad, confianza y recordación, mientras que para quien adquiere un producto o servicio opera como un referente de evaluación.
        .BG02.p-4
          .row.justify-content-center
            .col-lg-3.col-sm-4.col-6.mb-lg-0.mb-4
              img(src='@/assets/curso/tema4/img02.svg' alt="Imagen decorativa")
            .col-lg-9
              p.mb-0 En la actualidad, caracterizada por una saturación de opciones, las marcas tienen un papel crucial al simplificar la toma de decisiones y disminuir riesgos. Esto es especialmente valioso para los territorios que buscan posicionar sus tesoros locales y consolidar una propuesta diferenciada ante públicos internos y externos.
      .col-lg-5.col-sm-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img03.png' alt="Imagen decorativa")

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Componentes
    
    p La identidad de marca está compuesta por varios elementos que deben funcionar de manera coherente para generar reconocimiento, diferenciación y claridad sobre los valores, significados e imagen que se desean transmitir. Entre los componentes más utilizados se encuentran el nombre de marca, los símbolos, los slogans, los personajes, las melodías publicitarias, los empaques y otros aspectos sensoriales que acompañan su construcción.
    p.mb-5 A continuación, se describen los principales elementos:
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-botones.especial
          p(numero="1" titulo="Nombre de marca") Se recomienda utilizar nombres cortos, fáciles de pronunciar y memorables, especialmente en marcas nuevas. Esto facilita su recordación y su permanencia en la mente de los consumidores.
          p(numero="2" titulo="Símbolos") Comúnmente llamados logotipos, aunque técnicamente el logotipo es la parte escrita de la marca y el isotipo es la parte gráfica. Ambos deben permitir una recordación efectiva y tener la flexibilidad de usarse juntos o por separado.
          p(numero="3" titulo="<i>Slogans</i>") Frases breves que acompañan el nombre o símbolo de la marca. Deben ser concisas, directas y transmitir con claridad la esencia, la promesa o el atributo diferencial que la marca representa.
          p(numero="4" titulo="Personajes") Figuras que encarnan los valores o atributos de la marca. Deben seleccionarse de forma coherente con el mensaje que se desea transmitir (por ejemplo, un personaje alegre para una marca que aspira a ser percibida como divertida).
          p(numero="5" titulo="Melodías publicitarias") Canciones, sonidos o adaptaciones musicales diseñadas para generar recordación y reforzar la identidad de la marca. Muchas marcas registran o licencian sonidos reconocibles por su poder evocador.
          p(numero="6" titulo="Empaques y envases") Formas particulares de envases pueden convertirse en elementos clave de identidad. Algunas empresas incluso registran la forma de sus envases debido a su alto poder distintivo. Este elemento tiene especial relevancia en productos que son comparados directamente en puntos de venta.
          p(numero="7" titulo="Otros elementos de identidad de marca") En la actualidad, la construcción de marca incorpora elementos sensoriales y espaciales como olores característicos, la ambientación de un punto de venta, la utilización de colores específicos, tipografías propias o incluso sonidos asociados a un producto o servicio.
      .col-lg-3.col-sm-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img04.jpg' alt="Imagen decorativa")


    .row.justify-content-center.mb-4
      .col-lg-2.col-sm-3.col-4.mb-lg-0.mb-4.px-0(data-aos="fade-right")
        .BG03.px-2.h-100
          img(src='@/assets/curso/tema4/img05.svg' alt="Imagen decorativa")
      .col-lg-8.px-0(data-aos="fade-left")
        .BG04.p-4.h-100
          p.mb-0 Para lograr un reconocimiento, una diferenciación y una señalización efectiva, es necesario que todos los elementos de la marca se planifiquen y funcionen de manera articulada. Esto implica que la identidad propuesta tenga sentido para los consumidores y que, en algún grado, se incorporen sus percepciones, expectativas y necesidades dentro del proceso de desarrollo de la marca.
    

</template>

<script>
export default {
  name: 'Tema4',
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
