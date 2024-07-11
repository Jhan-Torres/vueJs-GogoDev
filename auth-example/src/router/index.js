import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/products/:id',
      name: 'product-detail',
      component: () => import('../views/DetailView.vue'),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/LogInForm.vue'),
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/SignUpForm.vue'),
      meta: {
        requireAuth: false,
      }
    }
  ]
})

export default router
