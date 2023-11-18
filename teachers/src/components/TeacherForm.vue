<!-- Generado con shortcut: vuecomponentsnippet -->
<template>
	<section>
		<h3>Añadir Profesor</h3>
		<div><label>Nombre:</label> <input type="text" v-model="teacher.teacherName"></div>
		<div><label>Apellidos:</label> <input type="text" v-model="teacher.teacherSurname"></div>
		<div><label>DNI:</label> <input type="text" v-model="teacher.teacherDni"></div>
		<div><label>Materias:</label> <input type="text" v-model="subject"> <button @click="addTeacherSubject()">Agregar</button> </div>
		<div>
			<ul>
				<li v-for="(element, index) in teacher.teacherSubjects" :key="index">{{ element }}</li>
			</ul>
		</div>
		<input type="checkbox" v-model="teacher.docCheckbox">Documentación entregada
		<button @click="addTeacher()">Agregar</button>
	</section>

	<section>
		<h3>Listado de profesores</h3>
		<table>
			<tr>
				<th>Nombre</th>
				<th>Apellidos</th>
				<th>DNI</th>
				<th>Materias</th>
				<th>Documentación Entregada</th>
			</tr>

			<tr v-for="element in teachersList" :key="element.teacherDni">
				<th>{{ element.teacherName }}</th>
				<th>{{ element.teacherSurname }}</th>
				<th>{{ element.teacherDni }}</th>
				<th>
					<ul>
						<li v-for="(item, index) in element.teacherSubjects" :key="index">{{ item }}</li>
					</ul>
				</th>
				<th v-if="element.docCheckbox">Entregada</th>
				<th v-else>No Entregada</th>
			</tr>
		</table>
	</section>
</template>

<script setup>
	import { ref } from 'vue';

	//Para crear un profesor, con los datos ingresados en el template
	let teacher = ref({
		teacherName: '',
		teacherSurname: '',
		teacherDni: '',
		//Para crear un Array de las materias que se agregan por cada profesor
		teacherSubjects: [],
		docCheckbox: false
	});

	//Para crear una lista de profesores ingresados
	let teachersList = ref([]);
	
	//Para almacenar cada valor de la materia ingresada
	let subject = ref('');

	//Funcion para añadir la info del input del checkbox al array de subject
	const addTeacherSubject = () => {
		teacher.value.teacherSubjects.push(subject.value);

		subject.value = ''; //Vaciar el campo Materias en el formulario
	}

	//Funcion para añadir el profesor completo a la lista de profesores
	const addTeacher = () => {
		//Añadir a la lista de profesores un objeto no reactivo para no perder los valores
		teachersList.value.push({
			teacherName: teacher.value.teacherName,
			teacherSurname: teacher.value.teacherSurname,
			teacherDni: teacher.value.teacherDni,
			teacherSubjects: teacher.value.teacherSubjects,
			docCheckbox: teacher.value.docCheckbox
		});

		//Vaciar los campos del teacher
		teacher.value.teacherName = "";
		teacher.value.teacherSurname = "";
		teacher.value.teacherDni = "";
		teacher.value.teacherSubjects = [];
		teacher.value.docCheckbox = "";
	}
</script>

<style scoped>

</style>