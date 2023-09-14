<template>
  <div class="portfolio">
    <!-- ¿Quién Soy? -->
    <section class="who-am-i">
      <h2>¿Quién Soy?</h2>
      <p>{{ quienSoy }}</p>
    </section>

    <!-- Lo que Hago -->
    <section class="what-i-do">
      <h2>Lo que Hago</h2>
      <p>{{ loQueHago }}</p>
    </section>

    <!-- Mi Enfoque -->
    <section class="my-approach">
      <h2>Mi Enfoque</h2>
      <p>{{ miEnfoque }}</p>
    </section>

    <!-- ¿Por Qué Yo? -->
    <section class="why-me">
      <h2>¿Por Qué Yo?</h2>
      <p>{{ porQueYo }}</p>
    </section>

    <!-- Un Vistazo a Mi Vida Personal -->
    <section class="personal-life">
      <h2>Un Vistazo a Mi Vida Personal</h2>
      <p>{{ vidaPersonal }}</p>
    </section>

    <!-- Proyectos -->
    <section class="projects">
      <h2>Proyectos</h2>
      <!-- Aquí puedes listar tus proyectos con imágenes y descripciones -->
      <div v-for="proyecto in proyectos" :key="proyecto.id" class="project">
        <h3 v-if="proyecto.url">{{ proyecto.titulo }} <a :href="proyecto.url" target="_blank" rel="noopener noreferrer">
            (Visitar)</a></h3>
        <h3 v-else>{{ proyecto.titulo }}</h3>
        <p>{{ proyecto.descripcion }}</p>
        <template v-if="proyecto.video">
          <template v-if="loading">
            <div class="spinner">
              <img src="../assets/img/spinner.svg" alt="Cargando..." />
            </div>
          </template>
          <template v-else>
            <div class="video-container">
              <iframe :src="proyecto.video" type="video/youtube" frameborder="0" allowfullscreen></iframe>
            </div>
          </template>
        </template>
        <template v-else>
          <!-- Verifica si el proyecto tiene un enlace a un PDF -->
          <template v-if="proyecto.pdf">
            <template v-if="loading">
              <div class="spinner">
                <img src="../assets/img/spinner.svg" alt="Cargando..." />
              </div>
            </template>
            <template v-else>
              <iframe :src="proyecto.pdf" width="100%" height="250px" frameborder="3em" scrolling="false" allowfullscreen="false"></iframe>
            </template>
          </template>
          <!-- Si no hay enlace a PDF, muestra la imagen -->
          <template v-else>
            <div class="image-gallery">
              <template v-if="loading">
              <div class="spinner">
                <img src="../assets/img/spinner.svg" alt="Cargando..." />
              </div>
            </template>
            <template v-else>
              <img v-for="(imagen, index) in proyecto.imagenes" :key="index" :src="imagen" :alt="'Imagen ' + (index + 1)" />
            </template>
            </div>
          </template>
        </template>
      </div>

    </section>
  </div>
</template>

<script>
const urlBaseGoogleDrive = "https://drive.google.com/uc?export=view&id=";
export default {
  data() {
    return {
      loading: true,
      quienSoy: "Soy Sergio Osbaldo, un apasionado desarrollador FullStack con una sólida formación académica y una profunda pasión por la programación. Mi enfoque se caracteriza por ser sistemático y preciso, lo que me permite trabajar eficazmente en entornos estructurados y en situaciones bien definidas. Mis habilidades incluyen el desarrollo de aplicaciones back-end utilizando Node.js y MySQL, así como la creación de experiencias front-end excepcionales con Vue.js.",

      loQueHago: "Tengo experiencia en el desarrollo de aplicaciones tanto en el front-end como en el back-end. Trabajo con tecnologías como Vue.js, Nuxt.js, HTML5, CSS3, y muchas más para crear aplicaciones web innovadoras. Mi enfoque es crear soluciones de alta calidad y rendimiento.",

      miEnfoque: "Mi enfoque en la programación se basa en aprender constantemente y mantenerme al tanto de las últimas tendencias tecnológicas. Siempre busco formas de mejorar mis habilidades y aplicarlas en proyectos innovadores. Me encanta resolver problemas y enfrentar desafíos técnicos.",

      porQueYo: "Las personas deberían elegirme como desarrollador porque soy un apasionado por la programación y la tecnología. Mi atención a los detalles, mi capacidad para aprender rápidamente y mi enfoque en la calidad hacen que mis proyectos destaquen. Además, mi habilidad para trabajar en equipo y comunicarme eficazmente me convierten en un miembro valioso en cualquier proyecto.",

      vidaPersonal: "Fuera del trabajo, disfruto de actividades como pasear, asistir a la iglesia y apoyar a la comunidad. Me encanta relajarme con una buena taza de té, tomar el sol, hacer spinning y aprender a bailar. También soy disciplinado y aplico metodologías ágiles como Scrum y utilizo herramientas como Trello para mantenerme organizado en todas mis actividades.",

      proyectos: [
        {
          id: 1,
          titulo: "Levantamiento de Fotografía Aérea con Drones para Sistemas de Agricultura 4.0",
          descripcion: "En este proyecto, me dediqué al levantamiento de fotografía aérea utilizando drones para su posterior análisis y aplicación en sistemas de Agricultura 4.0. Capturé imágenes de alta resolución de áreas de cultivo de caña de azúcar en la región de Córdoba, Veracruz. Estas imágenes fueron procesadas y utilizadas en la implementación de sistemas avanzados de monitoreo agrícola. Mi trabajo incluyó la configuración y operación de drones, así como la gestión y análisis de las imágenes obtenidas. Este proyecto fue fundamental para contribuir a la eficiencia y la calidad en la agricultura moderna.",
          video: "https://www.youtube.com/embed/vBhMJ8KFWCg",
        },
        {
          id: 2,
          titulo: "Detección de Índice de Daño y Estrés Hídrico en Cultivos de Caña de Azúcar Capturados Vía Aérea",
          descripcion: "En este proyecto, trabajé en la identificación de indicadores de daño y escasez de agua en plantaciones de caña de azúcar utilizando imágenes multiespectrales capturadas por vehículos aéreos no tripulados (drones). Colaboré estrechamente con el ingenio azucarero 'El Potrero' en Veracruz para desarrollar un sistema web de monitoreo de cultivos de caña de azúcar. Utilicé técnicas avanzadas de procesamiento de imágenes, como filtrado, segmentación, extracción de características y detección de objetos, para obtener información valiosa sobre el estado de los cultivos. Además, implementé la tecnología NDVI para evaluar la salud de las plantas y realizar un seguimiento de los cambios en la vegetación a lo largo del tiempo. Este proyecto me permitió demostrar mi experiencia en el desarrollo web, el procesamiento de imágenes y la integración de algoritmos de procesamiento de imágenes en aplicaciones web en tiempo real.",
          imagenes: [
            'https://drive.google.com/uc?export=view&id=1l9DDDZZ76M-ucea7cZH3DTZxjQcdkFQQ&rl',
            // Agrega más URLs de imagen según sea necesario
          ],
        },
        {
          id: 3,
          titulo: "Configuración del IRD1218",
          descripcion: "Este proyecto se centró en el desarrollo de un sistema para la distribución de streaming de TV digital. Trabajé en la implementación de una plataforma que permitía a los usuarios acceder a contenido multimedia en tiempo real. Este proyecto me brindó la oportunidad de aplicar mis conocimientos en la creación de arquitecturas robustas para el procesamiento y la entrega de contenido multimedia en línea. Mi contribución ayudó a crear una plataforma de streaming estable y de alta calidad para el entretenimiento en línea.",
          pdf: "https://drive.google.com/file/d/183FWCGeXGGwGn1Xx7LQ4wULUaMbTj1_E/preview",
        },
        {
          id: 4,
          titulo: "Papas y Plátanos Castillo",
          url: "http://www.papasyplatanoscastillo.com",
          descripcion: "Durante mi tiempo en 'Papas y Plátanos Castillo', contribuí significativamente al éxito de la empresa, asumiendo un papel integral en una variedad de áreas clave. Desde el diseño del logotipo de la empresa y la captura de imágenes de productos hasta la gestión de dominios, el desarrollo del sitio web, la administración de redes sociales, la implementación de WhatsApp para una comunicación efectiva, la estrategia de marketing para el reclutamiento y la creación de códigos QR para facilitar el acceso a nuestra página web, mis contribuciones fortalecieron la presencia en línea de la empresa y mejoraron tanto la experiencia del cliente como el proceso de contratación de talento.",
          imagenes: [
            urlBaseGoogleDrive + "1bm9t_WkGcT95Z4IbXp1cDwQ6vfFxNdej",
          ]
        }
      ],
    };
  },
  mounted() {
    // Simula la carga de las imágenes
    setTimeout(() => {
      this.loading = false; // Cambia a false después de un tiempo (simulando la carga de imágenes)
    }, 4500); // Cambia este valor al tiempo necesario para cargar las imágenes
  },
};
</script>


<style scoped>
/* Estilos para el cuerpo del portafolio */
.portfolio {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: justify;
}

/* Estilos para los títulos de sección */
h2 {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #333;
}

/* Estilos para los párrafos de texto */
p {
  font-size: 16px;
  line-height: 1.5;
  color: #666;
}

/* Estilos para las imágenes de proyectos */
.project img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

/* Estilos para los títulos de proyectos */
.project h3 {
  font-size: 20px;
  margin-top: 10px;
  color: #333;
}

/* Estilos para descripciones de proyectos */
.project p {
  font-size: 16px;
  line-height: 1.5;
  color: #666;
}

/* Estilos para el cuerpo del portafolio */
.portfolio {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

/* Estilos para los títulos de sección */
h2 {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #333;
}

/* Estilos para los párrafos de texto */
p {
  font-size: 16px;
  line-height: 1.5;
  color: #666;
}

/* Estilos para las imágenes de proyectos */
.project img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

/* Estilos para los títulos de proyectos */
.project h3 {
  font-size: 20px;
  margin-top: 10px;
  color: #333;
}

/* Estilos para descripciones de proyectos */
.project p {
  font-size: 16px;
  line-height: 1.5;
  color: #666;
}

/* Enlaces */


/* Estiilos para video */
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  /* Proporción 16:9 (9 / 16 * 100%) */
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* spinner cargando... */

/* Estilos para el spinner */
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  /* Ajusta la altura según tus necesidades */
}

.spinner img {
  max-width: 100px;
  /* Ajusta el ancho del spinner */
}</style>
