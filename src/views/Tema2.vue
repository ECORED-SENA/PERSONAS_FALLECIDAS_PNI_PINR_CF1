<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Personas no identificadas y personas identificadas no reclamadas en los cementerios

    figure.mb-5(data-aos="fade-in" data-aos-duration="1500")
      img(src="@/assets/curso/tema2-imagen1.png")

    p.mb-5(data-aos="fade-in" data-aos-duration="1500") Cuando se habla de conceptos, se hace referencia a las ideas, las concepciones y la forma en la cual se entienden las cosas. Por lo cual, siguiendo estas acepciones, hay un acercamiento a las siglas de NN, PNI y PINR, su uso actual y lo que esto significa para los procesos de gestión de personas no identificadas y personas identificadas no reclamadas en los cementerios.

    Separador

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 2.1  Persona no identificada (PNI)
    
    .row.justify-content-center.mb-4(data-aos="fade-in" data-aos-duration="1500")
      .col-lg-9
        .box-color.color-secundario.px-5.py-3.text-center
          p.mb-0 Conforme a esto ¿es apropiado usar el término NN?, es importante la revisión del material a continuación:

    figure.mb-5(data-aos="fade-in" data-aos-duration="1500")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/B9bi5uUI86k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador(data-aos="fade-in" data-aos-duration="1500")

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 2.2  Persona identificada no reclamada (PINR)
    
    p.mb-4(data-aos="fade-in" data-aos-duration="1500") Ya conociendo el concepto de Personas No Identificadas (PNI), se puede abordar un término que se ha venido usando en paralelo a éste y es el de Personas Identificadas No Reclamadas (PINR), se puede profundizar un poco más en el siguiente video: 

    figure.mb-5(data-aos="fade-in" data-aos-duration="1500")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/m47wefD6YAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-5(data-aos="fade-in" data-aos-duration="1500")
      .col-lg-9
        .box-color.color-tercero.px-5.py-3.text-center
          p.mb-0 A través de estos dos supuestos se comprenderán los conceptos de PNI y PINR, asociándolos a la correcta definición:

    SlyderE(indicadores="derecha")(data-aos="fade-in" data-aos-duration="1500")
      .row
        .col-md-6.mb-4.mb-md-0
          p.mb-5 En un municipio, a las afueras de la zona urbana, se encuentra una persona fallecida, con signos de violencia y sin ningún tipo de documento de identificación. 
          figure.mb-4
            img(src="@/assets/curso/tema2-imagen4.svg")
          .row.justify-content-center
            .col-lg-6
              p.mb-0.text-center En este caso estamos hablando de una persona no identificada. 

        .col-md-6
          figure
            img(src='@/assets/curso/tema2-imagen5.png')

      .row
        .col-md-6.mb-4.mb-md-0
          p.mb-5 En el hospital de una región del país, ingresa una persona inconsciente y durante la atención hospitalaria fallece. Al revisar sus prendas, el personal de salud encontró su cédula de ciudadanía, pero ninguna persona se acerca para reconocerlo, ni se asocia con alguna familia.
          figure.mb-4
            img(src="@/assets/curso/tema2-imagen2.svg")
          .row.justify-content-center
            .col-lg-6
              p.mb-0.text-center En este caso estamos hablando de una persona identificada no reclamada. 

        .col-md-6
          figure
            img(src='@/assets/curso/tema2-imagen3.png')
      
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

<style lang="sass" scoped></style>
