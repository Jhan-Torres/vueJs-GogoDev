import {ref} from 'vue'

class AuthService {
    constructor() {
        this.jwt = ref(''); //json web token
        this.error = ref(''); //variable en caso ocurra un error en la autenticacion
    }

    getJwt() {
        return this.jwt;
    }

    getError() {
        return this.error;
    }

    //Establecer el proceso de auth
    async login(email, password) {
        try {
            //GESTION DE AUTENTICACION
            const res = await fetch('https://376usy84.directus.app/auth/login', {
                method: 'POST',
                headers: { //Aca en los header es donde se incluye la info de autenticacion
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email:email,
                    password:password
                })
            });

            //GESTION DE RESPUESTAS
            const result = await res.json();

            if ('errors' in result) { //error en proceso de auth
                this.error = "Login failed"
                return false;
            }

            this.jwt.value = result.data.access_token //.data.access_token -> debido al tipo de respuesta que da el servicio del backend
            return true;

        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default AuthService
