import { createRouter, createWebHistory } from 'vue-router';
import Inicio from './components/Inicio.vue';
import SobreMi from './components/SobreMi.vue';
import FormacionAcademica from './components/FormacionAcademica.vue';
import Portafolio from './components/Portafolio.vue';
import Contacto from './components/Contacto.vue';
import MasSobreMi from './components/MasSobreMi2.vue';

const routes = [
  { path: '/', component: Inicio },
  { path: '/sobre-mi', component: SobreMi },
  { path: '/sobre-mi/mas-sobre-mi', component: MasSobreMi},
  { path: '/formacion-academica', component: FormacionAcademica },
  { path: '/portafolio', component: Portafolio },
  { path: '/contacto', component: Contacto },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
  
});

export default router;
