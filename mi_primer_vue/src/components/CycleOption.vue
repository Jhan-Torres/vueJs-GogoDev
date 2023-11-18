<template>
  <div><h1>Hola mundo</h1></div>
</template>

<script setup>
	/* CON OPTION API
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: "CycleOption",
		//Usar los diferentes momentos durante el ciclo de vida de un componente
		created() {
			console.log("created");
		},
		beforeCreate() {
			console.log("before create");
		},
		mounted() {
			console.log("mounted");
		},
		updated() {
			console.log("updated");
		},
		unmounted() {
			console.log("unmounted or destroyed");
		}
	})
	*/

	/* COMPOSITION API: Aqui usamos HOOKS: */
	import { onMounted, onUpdated } from 'vue';
	//Importamos los diferentes eventos del lifecycle (onCreated, onMounted, etc), son funciones que reciben un callback

	onMounted(() => {
		console.log("Mounted");
	});

	onUpdated(() => {
		console.log("Updated");
	});
</script>

<style scoped>

</style>