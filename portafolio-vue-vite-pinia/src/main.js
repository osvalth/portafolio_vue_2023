import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import { createPinia } from 'pinia';
import './normalize.css'
import './style.css'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia);
app.mount('#app');



