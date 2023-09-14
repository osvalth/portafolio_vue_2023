<template>
  <div>
    <h2>Mis Proyectos</h2>
    
    
      <div class="project-collection">
        <div v-for="(proyecto, index) in proyectos" :key="index" class="project-card">
          <template v-if="loading">
            <div class="spinner">
              <img src="../assets/img/spinner.svg" alt="Cargando..." />
            </div>
          </template>
          <template v-else>
            <a :href="proyecto.url" target="_blank" rel="noopener noreferrer">
              <div class="project-image">
                <img :src="proyecto.miniatura" alt="Miniatura del proyecto" />
              </div>
            </a>
            <div class="project-info">
              <h3>{{ proyecto.titulo }}</h3>
              <p>{{ proyecto.descripcion }}</p>
              <p>Tecnologías: {{ proyecto.tecnologias }}</p>
            </div>
          </template>
        </div>
      </div>    
  </div>
</template>

<script>
const urlBaseGoogleDrive = "https://drive.google.com/uc?export=view&id=";
export default {
  data() {
    return {
      loading: true,
      proyectos: [
        {
          titulo: "Papas y plátanos castillo",
          descripcion: "Sitio web dedicado a promocionar la deliciosa variedad de papas, plátanos y otros productos de la empresa Papas y Plátanos Castillo.",
          tecnologias: "HTML5, CSS3, JavaScript y bootstrap 4",
          miniatura: urlBaseGoogleDrive + "1bm9t_WkGcT95Z4IbXp1cDwQ6vfFxNdej",
          url: "https://www.papasyplatanoscastillo.com/",
        },
        {
          titulo: "Stock de Guitarras LA",
          descripcion: "Sitio web dedicado a la selección diversa de guitarras de alta calidad que se adaptan a todos los estilos musicales. Encuentra tu sonido único con nosotros hoy mismo.",
          tecnologias: "Vue.js v3, HTML5, CSS3 y JavaScript",
          miniatura: urlBaseGoogleDrive + "1eJrdkvWDp5RbyMRHWvPrRXzxaAgi_aAn",
          url: "https://guitarras-vue-sergio-osbaldo.netlify.app/",
        },
        {
          titulo: "Portafolio",
          descripcion: "Este sitio web está dedicado a exhibir una amplia variedad de proyectos, demostrando nuestro conocimiento y experiencia en diversas áreas de desarrollo.",
          tecnologias: "Vue.js v3, HTML5, CSS3 y JavaScript",
          miniatura: urlBaseGoogleDrive + "1BOGk6ELW7oMe8VPxOm5useIFVOZrPCUX",
          url: "https://portafolio-vue-2023-sergio-osbaldo.netlify.app/",
        },
        {
          titulo: "Generador de Códigos QR",
          descripcion: "Sitio web dedicado a generar fácilmente códigos QR para enlaces web, información de contacto, ubicaciones y más.",
          tecnologias: "HTML5, CSS3 y JavaScript",
          miniatura: urlBaseGoogleDrive + "1q2oeqPQ3li0I4ke3Gur2JICZhsaHwFk3",
          url: "https://generador-codigos-qr-sergio-osbaldo.netlify.app/",
        },
        {
          titulo: "To Do List",
          descripcion: "Sitio web para crear y gestionar las tareas pendientes de manera eficiente, estableciendo recordatorios y marcando las tareas completadas.",
          tecnologias: "Nuxt.js v2, HTML5, CSS3 y JavaScript.",
          miniatura: urlBaseGoogleDrive + "1sJDR8Ndg4c2f57WChtOQdAoPk71IvDwP",
          url: "https://to-do-list1.vercel.app/",
        },
        {
          titulo: "Personajes de la serie Rick & Morty (Versión 1)",
          descripcion: "Sitio web Para visualizar los personajes de Rick and Morty, mediante el consumo de una API libre.",
          tecnologias: "Vue.js v3, HTML5, CSS3 y JavaScript",
          miniatura: urlBaseGoogleDrive + "1s8BOggLBgu8RJBCAcWJ1pLNByTj5QXD5",
          url: "https://rick-and-morty-tau-eight.vercel.app/",
        },  
        {
          titulo: "Personajes de la serie Rick & Morty. (Versión 2)",
          descripcion: "Aplicación de escritorio para visualizar los personajes de Rick and Morty, mediante el consumo de una API libre.",
          tecnologias: "Vue.js v2, HTML5, CSS3 y JavaScript, Electron.js y Bulma.",
          miniatura: urlBaseGoogleDrive + "1S2hCcx1AB41hdBM7PiKqH4t3Ubzb8WwR",
          url: "https://consumirapis.vercel.app/",
        },
      ],
    };
  },
  mounted() {
    // Simula la carga de las imágenes
    setTimeout(() => {
      this.loading = false; // Cambia a false después de un tiempo (simulando la carga de imágenes)
    }, 3000); // Cambia este valor al tiempo necesario para cargar las imágenes
  },
};
</script>

<style scoped>
h2 {
  font-size: 24px; /* Tamaño de fuente */
  color: #333; /* Color del texto */
  text-align: center; /* Alineación del texto al centro */
  margin-top: 20px; /* Margen superior */
  margin-bottom: 30px; /* Margen inferior */
  /* text-transform: uppercase; /* Transforma el texto a mayúsculas */
  letter-spacing: 2px; /* Espaciado entre letras */
}

.project-collection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  margin: 1em;
  gap: 3em;
}

.project-card {
  max-width: 18em; /* Anchura máxima de cada tarjeta */
  background-color: #ffffff;
  border: 0.1em solid #e0e0e0;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.project-card:hover {
  transform: scale(1.08);
}

.project-card img {
  width: 100%;
  height: auto;
}

.project-info {
  padding: 16px;
}

.project-info h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.project-info p {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

/* Media query para dispositivos móviles */
@media (max-width: 768px) {
  .project-collection {
    flex-direction: column; /* Cambia a dirección de columna */
    align-items: center; /* Alinea a la izquierda */
    gap: 2em; /* Espaciado entre tarjetas */
  }
  .project-card {
    max-width: 100%; /* Toma todo el ancho */
  }
}
</style>
