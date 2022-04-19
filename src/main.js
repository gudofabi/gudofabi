import { createApp } from 'vue'
import { createPinia } from 'pinia'

/** Icons */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

import './assets/style/main.scss';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('fa', FontAwesomeIcon)

app.mount('#app')
