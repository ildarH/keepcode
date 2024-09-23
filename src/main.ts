import './assets/index.css'
import VueDatePicker from '@vuepic/vue-datepicker'
import vSelect from 'vue-select'
import '@vuepic/vue-datepicker/dist/main.css'
import 'vue-select/dist/vue-select.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('VueDatePicker', VueDatePicker)
app.component('VueSelect', vSelect)
app.use(router)

app.mount('#app')
