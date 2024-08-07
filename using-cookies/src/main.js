import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// after install "npm i vue-cookies"
import VueCookies from 'vue-cookies'

const app = createApp(App)

app.use(createPinia())

//configuracion de cookies:
app.use(VueCookies, {
  expires: '1d',  //Expires after "1 day" (usual value)
  // path: '/', //path en donde se van a guardar las cookies
  // domain: '', //dominio en concreto en donde se va a guardar las cookies
  // secure: '', //Modo de seguridad que se aplica a las cookies
  // sameSite: '', //configuraciones sameSite de las cookies
})

/*
Guardar una cookie:
  $cookies.set('auth', value, expires, path, domain, secure, sameSite)
Obtener una cookie:
  $cookies.get('auth')
Eliminar una cookie:
  $cookies.remove('auth')
Verificar si exite una cookie:
  $cookies.isKey('auth')
Todas las cookies guardadas:
  $cookies.keys()
*/

app.mount('#app')
