import { createApp, markRaw } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

//state managment library
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia();
pinia.use(({ store }) => {
    store.$router = markRaw(router)
  });

app.use(pinia)
app.use(router)
app.mount('#app')
