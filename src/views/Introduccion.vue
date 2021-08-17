<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-in" data-aos-duration="1500") Apreciado aprendiz bienvenido a este momento de aprendizaje, orientado a reconocer el marco normativo para la gestión de las personas <strong>Fallecidas No Identificadas (PNI) e Identificadas No Reclamadas (PINR)</strong> de acuerdo con lineamientos técnicos. Se invita a observar el siguiente recurso de aprendizaje para más información.

    .box-color.color-primario.px-5.py-4.mb-5(data-aos="fade-in" data-aos-duration="2500")
      .row
        .col-lg-5.mb-5.mb-lg-0.px-lg-5
          figure
            img(src="@/assets/curso/intro-1.png")
        .col-lg-7
          p.mb-0 
            strong El manejo integral de las víctimas y de la persona fallecida no identificada,  e identificada no reclamada, se constituye en un derecho que obliga al Estado y a otras instancias a la implementación de medidas adecuadas, para la reparación, restitución de derechos y garantías de no repetición en todas sus dimensiones tal como lo plantea la normatividad vigente, por lo cual se implementan acciones de búsqueda, identificación y entrega en condiciones de dignidad de los cuerpos o restos humanos de las personas desaparecidas. 
    .row.justify-content-center(data-aos="fade-in" data-aos-duration="3000")
      .col-lg-10
        .box-border-color.color-primario.px-5
          p.mb-0 En este componente formativo se reconocerá la legislación vigente desde el concepto y las generalidades de la persona fallecida no identificada e identificada no reclamada, al igual que la importancia de la gestión de identificación y entrega a sus familias.
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
