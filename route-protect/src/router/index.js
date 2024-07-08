import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { //para añadir metadatos a las rutas
        requireAuth: false,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: {
        requireAuth: true,
      }
    }
  ]
})

//Proteger algunas rutas
router.beforeEach((to, from, next ) => {   //.beforeEach --> antes de acceder a cada ruta ejecutar un "guard"
  //to    -> donde quiere ir el usuario
  //from  -> donde viene el usuario
  //next  -> hacia donde vamos enviar al usuario

  //verificar auth:
  // const auth = store.jwt != null
  const auth = false //usuario no autenticado(supuesto)

  //si la ruta a la que quiere ir el usuario necesita autenticación
  const needAuth = to.meta.requireAuth

  //si needAuth es true y el usuario no esta autenticado, se le enviará al login
  if(needAuth && !auth) {
    next('login');
  } else {
    next(); //aqui decimos que la ruta a la que quiere ir el usuario va a ser la que necesite
  }
}) 

export default router
