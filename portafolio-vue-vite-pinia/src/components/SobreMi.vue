<template>
  <section>
    <div class="inicio">
      <div class="hover-3d-container">
        <div
          class="hover-3d-element"
          @mousemove="move3DEffect"
          @mouseout="reset3DEffect"
        >
          <!-- Contenido de la imagen -->
        </div>
      </div>
      <div class="info">
        <h2>Me presento</h2>
        <h1 class="name">{{ nombre }}</h1>
        <div class="maquina-de-escribir">
          <div class="texto">
            <span class="texto-escrito">{{ textoEscrito }}</span>
            <span class="cursor" :class="{ parpadeo: mostrarCursor }"></span>
          </div>
        </div>
        <li>
          <router-link :to="{ path: '/sobre-mi/mas-sobre-mi' }"
            ><a>Más sobre mí</a></router-link
          >
        </li>
      </div>
    </div>
  </section>
</template>
<script setup>
</script>
<script>
export default {
  name: "Sobre mi",
  data() {
    return {
      nombre: "Soy Sergio Osbaldo",
      texto: "¡Desarrollador FullStack!",
      textoEscrito: "",
      mostrarCursor: true,
    };
  },
  mounted() {
    let index = 0;
    const interval = setInterval(() => {
      this.textoEscrito += this.texto[index];
      index++;
      if (index === this.texto.length) {
        clearInterval(interval);
        setTimeout(() => {
          this.borrarTexto();
        }, 1000); // Espera 1 segundo antes de borrar
      }
    }, 100); // Cambia cada 100ms (puedes ajustar la velocidad)
  },
  methods: {
    borrarTexto() {
      const interval = setInterval(() => {
        this.textoEscrito = this.textoEscrito.slice(0, -1);
        if (this.textoEscrito === "") {
          clearInterval(interval);
          setTimeout(() => {
            this.montarTexto();
          }, 1000); // Espera 1 segundo antes de comenzar de nuevo
        }
      }, 100); // Borra cada 100ms
    },
    montarTexto() {
      let index = 0;
      const interval = setInterval(() => {
        this.textoEscrito += this.texto[index];
        index++;
        if (index === this.texto.length) {
          clearInterval(interval);
          setTimeout(() => {
            this.borrarTexto();
          }, 1000); // Espera 1 segundo antes de borrar
        }
      }, 100); // Cambia cada 100ms (puedes ajustar la velocidad)
    },
    move3DEffect(event) {
      const element = this.$el.querySelector(".hover-3d-element");
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / element.offsetWidth - 0.5;
      const y = (event.clientY - rect.top) / element.offsetHeight - 0.5;
      element.style.transform = `rotateY(${x * 30}deg) rotateX(${
        y * 30
      }deg) scale(1.1)`;
    },
    reset3DEffect() {
      const element = this.$el.querySelector(".hover-3d-element");
      element.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    },
  },
};
</script>
<style>
.inicio {
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  height: 100vh;
}
.info {
  text-align: center;
}
.redes-sociales a {
  font-size: 24px;
  margin: 0 10px;
  text-decoration: none;
}
.name {
  font-size: 4em;
}
/* Efecto maquina de escribir */
.maquina-de-escribir {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
}
.texto {
  display: inline-block;
  position: relative;
  font-size: 24px;
}
.cursor {
  display: inline-block;
  width: 1px;
  height: 20px;
  background-color: #000;
}
.parpadeo {
  animation: parpadeo 0.7s infinite;
}
@keyframes parpadeo {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
/* efecto 3d en elemento */
/* ********************* */
.hover-3d-container {
  margin: 6.5em 0em 2.2em 0em;

  width: 300px;
  /* Ancho del contenedor */
  height: 430px;
  /* Alto del contenedor */
  perspective: 1000px;
  position: relative;
  /* margin: 50px auto; */
}
.hover-3d-element {
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/yo.jpg");
  /* Reemplaza 'tu-imagen.jpg' con la URL de tu imagen */
  background-size: cover;
  background-position: center;
  transition: transform 0.05s, box-shadow 0.05s;
  transform-origin: center center;
  /* Establece el punto de origen de la transformación en el centro */
  transform-style: preserve-3d;
  /* Para mantener el contenido en 3D */
  box-shadow: 0 0 80px rgba(0, 0, 0, 1);
}
.hover-3d-element.active {
  transform: rotateX(15deg) rotateY(15deg) scale(1.2);
}
/* ********************* */
.more--data {
  display: flex;

  gap: 5em;
}
</style>
