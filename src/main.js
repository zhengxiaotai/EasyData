import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import ElementPlus from 'element-plus'

import 'font-awesome/css/font-awesome.min.css';

const app = createApp(App)
installElementPlus(app)
app.use(router).use(ElementPlus).mount('#app')
