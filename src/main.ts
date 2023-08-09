//application
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from "@/store/store";

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//styles
import '@/assets/styles/main.css'
import '@/assets/styles/colors.css'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify).use(store).use(router).mount('#app')
