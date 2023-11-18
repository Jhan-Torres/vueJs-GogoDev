<!-- V-ON es una directiva para manejar los eventos en VUE. Podemos trabajar con todos los eventos que HTML tiene disponible -->
<template>
    <p :style="{ backgroundColor:'blueviolet', color: c }">V-on</p>
    
    <!-- V-ON shortcut -> "@click" -->
    <button v-on:click="handleClick()">Cambiar color</button>
</template>

<script setup>
    import { ref } from 'vue'
    let c = ref('#fff');
    const handleClick = () => c.value = '#ff0000'

    /*  CON OPTION API, nota: en la etiqueta SCRIPT YA NO VA EL "setup"
        import { defineComponent } from 'vue'
        export default defineComponent({
            name: 'ClassV-on',
            data() {
                return {
                    c: '#fff'
                }
            },
            methods: {
                handleClick() {
                    this.c = '#ff0000'
                }
            }
        })
    */
</script>

<style scoped>

</style>