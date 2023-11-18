/* Archivo encargado de montar en el index el componente principal de la aplicacion(app.vue) */
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue' //(*) //Crea una app vue

/* 
    Generamos nuestras directivas personalizadas, antes de montar la aplicacion, de esta forma vamos a poder decir a nuestra
    aplicacion que puede usar las directivas que definiremos.
*/

/* const app = createApp(App).mount('#app')*/  //Para crear la aplicacion y montar en la etiqueta con id=#app


//Ahora para crear directivas personalizadas, debemos reestructurar de otra forma nuestro main.js:
const app = createApp(App); //Creamos la aplicacion

//crear directiva: app.directive -> quiere decir que la directiva estara disponible solo para ese componente
//DIRECTIVAS PERSONALIZADAS SIMPLES: en la etiqueta lo ejecutamos como (v-font-size)
app.directive('font-size', {
    beforeMount: (element, binding) => { 
    //element -> etiqueta donde se aplica la directiva. 
    //binding -> datos que recibimos en esta directiva para que realice su funcion.
        element.style.fontSize = "70px";
    },//El primer elemento del objeto es el tiempo en el cual se va a crear la directiva, podemos agregar los que necesitemos
}); 


app.directive('custom-size', {
    beforeMount: (element, binding) => {
        //DIRECTIVAS PERSONALIZADAS CON VALORES: -> en la etiqueta lo ejecutamos como (v-custom-size="#number")
        // element.style.fontSize = binding.value + "px";

        //DIRECTIVAS PERSONALIZADAS CON ARGUMENTOS: -> en la etiqueta lo ejecutamos como (v-custom-size:argumento)
        let size = 18;
        
        switch (binding.arg) {
            case 'sm':
                size = 10;
                break;
            case 'md':
                size = 18;
                break;
            case 'lg':
                size = 25;
                break;
            case 'xl':
                size = 40;
                break;
            case 'xxl':
                size = 72;
                break;
        }
        element.style.fontSize = size + "px";
    },
});

//DIRECTIVAS PERSONALIZADAS CON MODIFICADORES: en la etiqueta lo ejecutamos como (v-custom-font.xxl.blue)
app.directive('custom-font', {
    beforeMount: (element, binding) => {
        let size = 18;
        let color = 'black';
        //para acceder al valor de los modificadores -> binding.modifiers.NombreModificador
        if (binding.modifiers.sm) {
            size = 10;
        } else if (binding.modifiers.lg) {
            size = 25;
        } else if (binding.modifiers.xxl) {
            size = 72;
        }

        if (binding.modifiers.red) {
            color = 'red';
        } else if (binding.modifiers.green) {
            color = 'green';
        } else if (binding.modifiers.blue) {
            color = 'blue';
        }

        element.style.fontSize = size + "px";
        element.style.color = color;
    }
})

app.mount('#app'); //montamos la aplicacion