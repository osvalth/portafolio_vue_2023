<template>
  <div class="container--nav container--nav--2">
    <!-- Botón de hamburguesa solo en dispositivos móviles -->
    <button class="menu-toggle" @click="toggleMenu" v-if="isMobile">
      <font-awesome-icon icon="bars" />
    </button>
    <!-- Menú de navegación -->
    <nav class="nav" :class="{ 'active': isMenuOpen }">
      <ul class="nav-items" :class="{ 'column': isMobile }" v-if="isMenuOpen">
        <li>
          <router-link to="/">
            <a>Inicio</a>
          </router-link>
        </li>
        <li>
          <router-link to="/sobre-mi">
            <a>Sobre mí</a>
          </router-link>
        </li>
        <li>
          <router-link to="/portafolio">
            <a>Portafolio</a>
          </router-link>
        </li>
        <li>
          <router-link to="/contacto">
            <a>Contacto</a>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
  <!-- <div class="menu--wave" style=" overflow: hidden;">
    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
      <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        style="stroke: none; fill: #fff;">
      </path>
    </svg>
  </div> -->

</template>



<script>
export default {
  data() {
    return {
      isMenuOpen: true,
      isMobile: false, // Variable para determinar si es un dispositivo móvil
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    checkMobile() {
      // Verificar si el ancho de la pantalla es menor o igual a 768px (puedes ajustar este valor)
      this.isMobile = window.innerWidth <= 768;
    },
  },
  mounted() {
    // Comprobar el estado móvil cuando se carga la página
    this.checkMobile();
    // Escuchar cambios en el tamaño de la pantalla
    window.addEventListener('resize', this.checkMobile);
  },
  beforeDestroy() {
    // Limpiar el evento de escucha al salir de la página
    window.removeEventListener('resize', this.checkMobile);
  },
};
</script>

<style scoped>
.container--nav {
  display: flex;
  flex-direction: row-reverse;
  justify-content: end;
  align-items: center;
  background-color: #333; /* Cambia el color de fondo según tu preferencia */
  padding: 10px 20px;

}

.menu-toggle {
  background: none;
  border: none;
  font-size: 24px;
  color: #fff; /* Cambia el color del icono de hamburguesa */
  cursor: pointer;
  display: none; /* Inicialmente ocultamos el botón en pantallas no móviles */
}

.nav {
  background-color: #333; /* Cambia el color de fondo según tu preferencia */
  /* z-index: 1; */
  
}

.nav-items {
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: row; /* Muestra el menú en una fila en pantallas grandes */
  align-items: center;
  margin: 0;
}

.nav-items.column {
  flex-direction: column; /* Muestra el menú en una columna en dispositivos móviles */

}

.nav-items li {
  padding: 10px;
}

.nav-items a {
  text-decoration: none;
  color: #fff; /* Cambia el color del texto del menú */
  transition: color 0.3s;
}

.nav-items a:hover {
  color: #555; /* Cambia el color del texto en el hover */
}

.active {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap
}

/* Versión móvil - menú de hamburguesas oculto */
@media screen and (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav.active {
    position: relative;
    top: 0px; /* Ajusta la distancia desde la parte superior */
    right: 0; /* Ajusta la distancia desde la derecha */
    width: 100%; /* Ocupa todo el ancho de la pantalla */
    height: auto;
    opacity: 1;
    transition: transform 0.3s;
    transform: translateX(0);
  }
}
</style>
