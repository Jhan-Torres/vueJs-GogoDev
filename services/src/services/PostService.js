/* 
Este archivo será una clase con la función de buscar los datos y servirlos para que cualquier componente que quiera usarlos
simplemente llame al servicio y pida los datos 
*/

import { ref } from 'vue'

class PostService {
    // private posts;

    constructor() { 
        this.posts = ref([]);   //Para obtener todos los posts
        this.post = ref({});    //Para cada post individual
    }

    getPosts() {
        return this.posts;
    }

    getPost() {
        return this.post;
    }

    //Funcion que obtendrá los datos de un servicio externo (API)
    async fetchAll() {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts';   //API que tiene los datos
            const response = await fetch(url);                          //Para almacenar la respuesta de la API
            const json = await response.json();                         //Almacenar la respuesta en formato JSON
            this.posts.value = await json;

        } catch(error) {
            console.log(error); 
        }
    }

    async fetchById(id) {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
            const response = await fetch(url);
            const json = await response.json();
            this.post.value = await json;
        } catch (error) {
            console.log(error);
        }
    }
}

export default PostService