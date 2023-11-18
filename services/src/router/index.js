import {createRouter, createWebHistory} from 'vue-router'
import PostListView from '../views/PostListView.vue'
import PostDetailView from '../views/PostDetailView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: to => {return {name: 'PostList'}} 
            //Redireccion al "PostList", usamos una funcion para que retorne un objeto con name = 'PostList'
            //Nota: la funcion es para obligar la redireccion a usar el "name" como atributo, de lo contrario el atributo que le
            //especificamos lo tomara como una ruta (redirect: 'post').
        },
        {
            path: '/post',
            name: 'PostList',
            component: PostListView
        },
        {
            path: '/post/:id',
            name: 'PostDetail',
            component: PostDetailView
        }
    ]
});

export default router