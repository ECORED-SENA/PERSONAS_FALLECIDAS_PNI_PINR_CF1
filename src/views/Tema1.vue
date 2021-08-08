<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Marco Normativo

    figure.mb-5(data-aos="slide-left" data-aos-duration="1500")
      img(src="@/assets/curso/tema1-imagen1.png")

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 1.1  Introducción

    .cajon.color-primario.p-5.mb-4(data-aos="slide-right" data-aos-duration="1500")
        p Para iniciar, la gestión de procesos con personas fallecidas no identificadas (PNI) e identificadas no reclamadas (PINR) en cementerios, es necesario abordar la normativa vigente relacionada con PNI y PINR y cómo fundamentan la gestión de procesos en los cementerios.
    
    Separador(data-aos="fade-in")

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 1.2  Normativa nacional

    .row.justify-content-center.mb-4(data-aos="slide-left" data-aos-duration="1500")
      .col-lg-9.text-center
        p.mb-0 Se inicia entonces con algo que en la literatura jurídica se denomina el bloque de constitucionalidad, pero:
    .row.justify-content-center.mb-5(data-aos="slide-right" data-aos-duration="1500")
      .col-lg-8
        figure
          img(src="@/assets/curso/tema1-imagen2.svg")
    .row.justify-content-center.mb-5(data-aos="slide-left" data-aos-duration="1500")
      .col-lg-10
        p.mb-5 El bloque de constitucionalidad es una forma de denominar un conjunto integrado por la Constitución Política de 1991 su preámbulo, sus principios, las leyes orgánicas, algunos tratados y convenios internacionales de derechos humanos y las leyes estatutarias, son fundamentales para entender la importancia de nuestras funciones.
        figure.mb-5
          img(src="@/assets/curso/tema1-imagen3.svg")
        p.mb-5 Los componentes del bloque de constitucionalidad desarrollan conceptos esenciales para la gestión de las PNI y PINR, como la dignidad humana, los derechos fundamentales, las funciones de las ramas y órganos del poder público, como se verá más adelante no solo dignifican el tratamiento de las PNI y PINR sino que ayudan a comprender las obligaciones del Estado y los derechos de las familias.
        .bloque-texto-c.color-primario.p-4
          i.fas.fa-quote-right
          h4.mb-2 La gestión de procesos en cementerios con PNI Y PINR, tiene su cimiento en el bloque de constitucionalidad, toda vez que es un tema íntimamente ligado con la dignidad, los derechos humanos, los derechos fundamentales y la función del Estado
          span -  Primera premisa
    .row.justify-content-center.mb-5(data-aos="slide-right" data-aos-duration="1500")
      .col-lg-9
        .box-border-color.color-primario.px-5
          p.mb-0 Durante el desarrollo de este componente se encontrarán términos como <strong>“ley” “decreto” “resolución” “guía” “acto de servicio”</strong> que, si bien son distintos entre sí por quien los expide, su orientación o su finalidad, son parte de la normativa o legislación, que regulan la labor y por lo tanto se debe tenerlos en cuenta.
    .row.justify-content-center.mb-5(data-aos="slide-left" data-aos-duration="1500")
      .col-auto
        .px-5.py-2(style="background-color: #FCF8F4")
          strong Se puede conocerlos a continuación
    .row.justify-content-center.mb-5(data-aos="slide-right" data-aos-duration="1500")
      .col-lg-10
        .tarjeta.tarjeta--gris.p-4.mb-5
          LineaTiempoC.color-acento-contenido(text-small)
            .row(titulo="1979").px-5
              .col-lg-4.mb-5.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1-imagen4.png")
              .col-lg-8
                p.mb-0 
                  strong La Ley 9 de 1979, 
                  | que, si bien se expidió para dictar medidas sanitarias en el país, dedicó una parte de su contenido (título IX) a las defunciones (y su registro), al traslado de los cadáveres, la inhumación y la exhumación. 
            .row(titulo="1993").px-5
              .col-lg-4.mb-5.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1-imagen6.png")
              .col-lg-8
                p.mb-0 
                  strong Ley 38 del 15 de enero 1993 
                  | tenía por objeto el tema de la dactiloscopia, pero también, refiere la carta dental para fines de identificación. 
                  br
                  br
                  | Estos dos primeros referentes normativos, evidencian que, si bien el tema de la identificación de los cuerpos estaba más orientado a las medidas sanitarias y el registro, comienza a cobrar importancia en nuestra regulación.
            .row(titulo="2000").px-5
              .col-lg-4.mb-5.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1-imagen7.png")
              .col-lg-8
                p.mb-0 
                  strong La Ley 589 del 2000 
                  | por la cual se tipifica el genocidio, la desaparición forzada, el desplazamiento forzado y la tortura; adicionando estos delitos en el Código Penal Colombiano. Es importante esta norma para el tema que nos ocupa, toda vez que impone una obligación al Gobierno de diseñar y poner en marcha el Registro Nacional de desaparecidos, que incluirá todos los datos de identificación de las personas desaparecidas y de inhumación y exhumación de cadáveres de personas no identificadas.
            .row(titulo="2001").px-5
              .col-lg-4.mb-5.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1-imagen8.png")
              .col-lg-8
                p.mb-0 
                  strong Resolución 248 de 2001 
                  | por el Instituto Nacional de Medicina Legal y Ciencias Forenses, desarrolla temas importantes como la Red de identificación de cadáveres y la información científico-técnica de cadáveres que son sometidos a necropsia médico-legal.
            .row(titulo="2005").px-5
              p.mb-5
                strong Ley 971 de 2005,  
                | por la cual se reglamenta el mecanismo de búsqueda urgente, que es un instrumento mediante el cual se busca, que las autoridades judiciales, en forma inmediata, adelanten todas las diligencias que sean necesarias para la localización de personas que se presumen han sido desaparecidas. Hay dos elementos que permiten reflexionar sobre nuestra labor, el primero es que la Ley establece entre los derechos de los familiares de la persona desaparecida, el obtener la entrega inmediata del cadáver cuando se activó el mecanismo y la persona fue hallada sin vida, en segundo lugar,  la Ley resalta la importancia de los registros de personas desaparecidas o cadáveres sin identificar, para realizar la confrontación de datos y lograr el hallazgo de la víctima.
              .cajon.color-acento-botones.px-5.py-4.mb-4
                p.mb-0
                  strong Registro Nacional de Desaparecidos, 
                  | en el cual se establece, entre otros asuntos, el deber de reportar al Registro Nacional de Desaparecidos, la información relativa a la ubicación final del cuerpo o restos óseos que permitan su recuperación.
            .row(titulo="2009").px-5
              .col-lg-4.mb-5.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1-imagen9.png")
              .col-lg-8
                p.mb-0 
                  strong Las Resoluciones 1447 y 5194 del 11 de mayo 2009 y 10 de diciembre 2010  
                  | del Ministerio de la Protección Social, desarrollan los temas de servicios de cementerios, inhumación, exhumación y cremación de cadáveres.
            .row(titulo="2010").px-5
              .col-lg-4.mb-5.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1-imagen10.png")
              .col-lg-8
                p.mb-0 
                  strong La Ley 1408 del 20 de agosto 2010,  
                  | en la cual se rinde un homenaje a las víctimas de desaparición forzada, se adoptan medidas para su localización, se desarrolla el tema de los perfiles genéticos de desaparecidos, la asistencia a las familias de las víctimas y el registro SIRDEC (Sistema de Identificación Red de Desaparecidos y Cadáveres).  Esta ley impone una obligación: en los cementerios, los restos y cadáveres sean enterrados de manera individualizada y no en fosas comunes, con documentación rigurosa sobre su ubicación en el mismo y con garantía en la conservación y marcación de las tumbas por los administradores de los cementerios.
            .row(titulo="2011").px-5
              p.mb-5
                strong La Ley 1448 del 10 de junio 2011,  
                | por la cual se dictan medidas de atención, asistencia y reparación integral a las víctimas del conflicto armado interno y se dictan otras disposiciones, a su vez, es importante, los temas de atención, asistencia y reparación integral a las víctimas del conflicto armado, disponiéndose como una medida de satisfacción, entendida como una acción que proporciona bienestar y contribuye a mitigar el dolor de la víctima, el contribuir a la búsqueda de desaparecidos y colaborar con la identificación de los cadáveres y su inhumación posterior, según las indicaciones y tradiciones familiares y comunitarias.
              .cajon.color-acento-botones.px-5.py-4.mb-4
                p.mb-0
                  strong El Decreto 4800 de 2011: 
                  | desarrolla los temas de Registro único de víctimas, censo de hechos victimizantes, medidas de asistencia y reparación y medidas de reparación integral, con base a lo que se dispone en la <strong>Ley 1448 del 10 de junio 2011</strong>, en la asistencia para la entrega de los cuerpos o restos.
            .row(titulo="2014").px-5
              .col-lg-4.mb-5.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1-imagen11.png")
              .col-lg-8
                p.mb-0 
                  strong El Decreto 1862 de 2014  
                  | por el cual se establece el reglamento de la Comisión de Búsqueda de Personas Desaparecidas creada por la  
                  strong Ley 589 de 2000 y el Decreto 589 de 2017  
                  | por el cual se organiza la Unidad de Búsqueda de personas dadas por desaparecidas en el contexto y en razón del conflicto armado.
            .row(titulo="2015").px-5
              p.mb-5 La Ley la 1408 fue a su vez reglamentada por el Decreto 303 de 2015, que desarrolla los temas de localización, identificación, inhumación y homenaje a las víctimas del delito de desaparición forzada, banco de perfiles genéticos, entrega de cuerpos o restos humanos de víctimas identificadas, atención psicosocial en el proceso de entrega, mapas y conservación de cuerpos o restos humanos no identificados o identificados no reclamados. 
                br
                br
                | Una buena ayuda de memoria sobre las medidas que se establecen en el Decreto 303 de 2015 que nos pueden servir como guía en nuestro trabajo para la preservación de los cadáveres no identificados o identificados no reclamados es la siguiente, 7 medidas resumidas así:
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Respeto y humanidad.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Inhumación individualizada (garantías de ubicación, custodia, recuperación y posterior individualización).
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Inhumación del cadáver con sus elementos. 
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Inhumación y exhumación por orden de autoridad judicial competente.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Prohibición de cremación. 
                li 
                  .lista-ol--cuadro__vineta
                    span 6
                  | Prohibición e inhumación en osarios comunes y fosas comunes.
                li 
                  .lista-ol--cuadro__vineta
                    span 7
                  | Documentación rigurosa de la ubicación del cadáver
            .row(titulo="2018").px-5
              .col-lg-4.mb-5.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1-imagen12.png")
              .col-lg-8
                p.mb-0 
                  strong La Directiva 006 del 7 mayo 2018  
                  | de la Procuraduría General de la Nación, que reguló el Informe y obligaciones sobre el conocimiento de inhumaciones y/o exhumaciones de restos óseos o cadáveres de personas no identificadas y la Guía Normativa para el fortalecimiento de la Gestión de Cementerios en Colombia del Ministerio del Interior, del mismo año, que desarrolló todo lo relacionado con administración local, áreas de inhumación de personas no identificadas.
        
        p.mb-5 Actualmente se debe tener como referente la <strong>Guía de Orientaciones para el manejo, traslado y disposición final de cadáveres por SARS-CoV-2 (COVID-19)</strong> del Ministerio de Salud y Protección Social, que desarrolla el tema del COVID frente a los cementerios, manejo y traslado de cadáveres.
    
    .row.justify-content-center.mb-4(data-aos="slide-left" data-aos-duration="1500")
      .col-lg-7
        figure
          img(src="@/assets/curso/tema1-imagen13.svg")
    .row.justify-content-center.mb-4(data-aos="slide-right" data-aos-duration="1500")
      .col-lg-auto
        p.mb-0 Se puede conocer aquí la guía
    .row.justify-content-center.mb-4(data-aos="slide-left" data-aos-duration="1500")
      .col-lg-7
        a.anexo.mb-4(:href="obtenerLink('/downloads/manejo-cadaveres-covid-19f.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p 
              strong Anexo.  
              | Guía de Orientaciones para el manejo, traslado y disposición final de cadáveres por SARS-CoV-2 (COVID-19) 
    .row.justify-content-center.mb-4(data-aos="slide-right" data-aos-duration="1500")
      .col-lg-10
        .cajon.color-secundario.px-5.py-4.mb-4
          p.mb-0 En este recorrido normativo, se puede observar cómo los procesos de gestión de personas fallecidas no identificadas (PNI) e identificadas no reclamadas (PINR) en cementerios han cobrado vital importancia. Si bien no es necesario memorizar el consecutivo de cada una de las normas que los regulan, se debe conocer, referenciar e identificar su existencia y contenido, para contribuir desde la labor a la construcción de la paz, la memoria, la reparación y el duelo de las familias.
    .row.justify-content-center.mb-4(data-aos="slide-left" data-aos-duration="1500")
      .col-lg-7
        figure.mb-5
          img(src="@/assets/curso/tema1-imagen14.svg")
        p.mb-0.text-center Identifica las medidas dispuestas en el Decreto 303 de 2015, para la preservación de los cadáveres no identificados o identificados no reclamados.
    .row.justify-content-center.mb-4(data-aos="slide-right" data-aos-duration="1500")
      .col-lg-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/decreto_303_de_2015_0.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p 
              strong Anexo.  
              | Decreto número 0303 del 2015.
    
    Separador(data-aos="fade-in" data-aos-duration="1500")

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 1.3  Referentes internacionales

    .row.justify-content-center.mb-4(data-aos="slide-top" data-aos-duration="1500")
      .col-lg-10
        .cajon.color-secundario.px-5.py-4.mb-4
          p.mb-0 La normatividad internacional que regula las personas fallecidas <strong>no identificadas</strong> e <strong>identificadas</strong> no reclamadas son
    
    figure(data-aos="slide-bottom" data-aos-duration="1500")
      img(src="@/assets/curso/tema1-imagen15.svg")
    
  
</template>

<script>
export default {
  name: 'Tema1',
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
