<template>
  <div class="my--info">
    <div class="quien--soy">
      <h2><b>¿Quién Soy?</b></h2>
      <div class="my--info--content">
        <span class="padding--elements">
          <li>Soy un amante de la precisión y la organización, lo que me lleva a ser sistemático y orientado a seguir
            procedimientos.</li>
          <li>La atención meticulosa a los detalles es mi sello distintivo.</li>
          <li>Mi enfoque cauteloso y diplomático se traduce en decisiones informadas y resoluciones cuidadosamente
            consideradas.</li>
          <li>Mi paciencia y habilidad para escuchar demuestran un auténtico interés por las ideas y opiniones de los
            demás.</li>
          <li>Las habilidades de trabajo en equipo son mi fuerte, y me esfuerzo por mantener la armonía y evitar
            conflictos.</li>
          <li>Prefiero procedimientos operativos claros y consistentes para lograr resultados precisos y predecibles.</li>
        </span>
        <img class="image--size" src="../assets/img/quien_soy.avif" alt="¿Quién Soy?">
      </div>
    </div>

    <div class="lo--que--hago">
      <h2><b>Lo que Hago:</b></h2>
      <div class="my--info--content">
        <img class="image--size" src="../assets/img/lo_que_hago.avif" alt="Lo que Hago">
        <span class="padding--elements">
          <li>Como desarrollador FullStack, aplico un enfoque lógico y analítico para resolver problemas complejos.</li>
          <li>Mi perfeccionismo es evidente en la entrega de soluciones de la más alta calidad, minimizando errores y
            maximizando la eficiencia.</li>
          <li>La motivación me impulsa a buscar seguridad, consistencia y claridad en las instrucciones y normas.</li>
          <li>Valorizo los refuerzos positivos y reconfirmaciones de que estoy haciendo las cosas de manera correcta.</li>
        </span>
      </div>
    </div>

    <div class="lo--que--hago">
      <h2><b>Mi Enfoque:</b></h2>
      <div class="my--info--content">
        <span class="padding--elements">
          <li>Creo soluciones tecnológicas que son precisas, eficientes y altamente funcionales.</li>
          <li>Mi capacidad para trabajar en equipo y evitar conflictos fomenta un ambiente de trabajo productivo y
            colaborativo.</li>
          <li>La mejora continua es mi lema; me mantengo al día con las últimas tendencias en desarrollo FullStack.</li>
        </span>
        <img class="image--size" src="../assets/img/enfoque2.svg" alt="Mi enfoque">
      </div>
    </div>

    <div class="porque--yo">
      <h2><b>¿Por Qué Yo?</b></h2>
      <div class="my--info--content">
        <img class="image--size" src="../assets/img/porque_yo.svg" alt="¿Por Qué Yo?">

        <div class="padding--elements">

          <div class="my--card">
            <div class="box--image--card">
              <img class="image--cards" src="../assets/img/porque_yo/detalle_engranes.avif" alt="">
            </div>
            <div class="box--text--card">
              <span class="text--cards">
                Mi enfoque en la precisión y la atención al detalle garantiza que cada proyecto sea impecable.
              </span>
            </div>
          </div>

          <div class="my--card">
            <img class="image--cards" src="../assets/img/porque_yo/colaborar.avif" alt="">
            <span class="text--cards">
              Mi capacidad para colaborar de manera efectiva en equipos multidisciplinarios promueve la armonía y la
              productividad.
            </span>
          </div>

          <div class="my--card">
            <img class="image--cards" src="../assets/img/porque_yo/etica_perfeccionista.avif" alt="">
            <span class="text--cards">
              Mi ética de trabajo perfeccionista me impulsa a superar las expectativas en cada tarea.
            </span>
          </div>

        </div>
      </div>
    </div>

    <div class="vida--personal">
      <h2><b>Un Vistazo a Mi Vida Personal:</b></h2>
      <div class="my--info--content">
        <img class="image--size" src="../assets/img/" alt="Un Vistazo a Mi Vida Personal">
        <span class="padding--elements">
          <li>Fuera del trabajo, disfruto de actividades al aire libre como tomar el sol, hacer spinning, caminar y
            aprender a bailar.</li>
          <li>Además, soy un amante de la cocina y encuentro placer en experimentar con nuevos sabores y platillos.</li>
          <li>Me mantenerme enfocado y organizado, para lograr disfrutar el día a día.</li>
        </span>
      </div>
    </div>




  </div>
</template>

<style scoped>
.my--info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 2em;
  gap: 4em;
}

h2 {
  font-size: 2.5em;
  display: flex;
  justify-content: center;
  padding: 0em 0em 1.5em 0em
}

.image--size {
  width: 25em;
}

.my--info--content {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.padding--elements {
  padding: 0em 2em 0em 2em;
  display: flex;
  gap: 2em;
  text-align: justify;
}

/* tarjetas */
.my--card {
  display: flex;
  flex-direction: column;
}

.my--card:hover {
  border: black 0.1em solid;

}

.box--image--card {
  margin: 0.4em;
}

.image--cards {
  width: 15em;
  height: 15em;
}

.box--text--card {
  margin: 0.5em;
}

.text--cards {
  font-size: 1.2em;
  margin-top: 1em;
}</style>