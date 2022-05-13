import { createApp } from 'vue'
import { createPinia } from 'pinia'

/** Icons */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fab);
library.add(fas);

import './assets/style/main.scss';


import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueGtag, {
    config: { id: "UA-120785527-2" }
})
app.component('fa', FontAwesomeIcon)

app.mount('#app')
