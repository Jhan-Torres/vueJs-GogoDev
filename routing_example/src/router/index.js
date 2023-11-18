import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'

const router = createRouter({ //Creamos nuestro router
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ //Listado de rutas
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      //component: () => import('../views/AboutView.vue')     OTRA FORMA DE HACER EL COMPONENT
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/blog', 
      name: 'blog',
      component: BlogView
    },
    {
      // ":" especificamos parametro, podemos colocar varios "/:id/:category", con "?" indicamos parametro opcional "/:id?" 
      path: '/blog/:id', 
      name: 'post',
      component: PostView
    }
  ]
})

export default router
