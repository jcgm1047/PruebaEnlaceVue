<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title text-center mb-4">Registrate</h3>
                        <form @submit.prevent="registerUser">
                            <div class="form-group">
                                <label for="name">Nombre</label>
                                <input type="text" class="form-control" id="name" v-model="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Correo electrónico</label>
                                <input type="email" class="form-control" id="email" v-model="email" required>
                            </div>
                            <div class="form-group mb-4">
                                <label for="password">Contraseña</label>
                                <input type="password" class="form-control" id="password" v-model="password" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Registrar</button>
                        </form>
                        <p class="mt-3 text-center" v-if="error">{{ error }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
        };
    },
    methods: {
        async registerUser() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/User', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                });
                console.log(response.data);
                // Aquí puedes guardar el token de autenticación en el local storage o en una cookie
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
  