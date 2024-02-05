import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import App from './App.vue'
import router from './router'

import MakeitCaptcha from 'makeit-captcha'
import 'makeit-captcha/dist/captcha.min.css'

const app = createApp(App)


app.use(router)

app.use(MakeitCaptcha)

app.use(ElementPlus)

app.mount('#app')
