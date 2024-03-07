<template>
	<form>
		<div class="mb-3">
			<label for="exampleInputEmail1" class="form-label">Email address</label>
			<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
			<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
		</div>
		<div class="mb-3">
			<label for="exampleInputPassword1" class="form-label">Password</label>
			<input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
		</div>
		<button type="submit" class="btn btn-primary" @click.prevent="handleAuthUser">Submit</button>
	</form>
</template>

<script setup>
import { ref } from 'vue';

let email = ref('');
let password = ref('');

//generar un nuevo servicio de auth y llamar a la funcion del login.
import AuthService from '../services/AuthService';

async function handleAuthUser() {
	const auth = new AuthService();
	const succes = await auth.login(email.value, password.value);

	alert(succes ? 'login correct' : 'error login');
}

</script>
