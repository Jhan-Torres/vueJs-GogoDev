import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// after install "npm i vue-session"
import VueSession from 'vue-session'

const app = createApp(App)

app.use(createPinia())

app.use(VueSession)

app.mount('#app')

/*
Iniciar una sesion:
  $session.start()
Guardar una sesion:
  $session.set('auth', value)
Obtener una sesion:
  $session.get('auth')
Id de la sesion que estamos usando:
  $session.id()
Renovar una sesion:
  $session.renew()
Eliminar la sesion:
  $session.destroy('auth')
*/
