
<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            error: '',
        }
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/User/login', {
                    email: this.email,
                    password: this.password,
                });
                localStorage.setItem('auth',  JSON.stringify(response.data));
                location.reload();
            } catch (error) {
                this.error = 'Correo electrónico o contraseña incorrectos';
            }
        },
    },
}
</script>
<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title text-center mb-4">Iniciar sesión</h3>
                        <form>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" id="email" v-model="email">
                            </div>
                            <div class="form-group">
                                <label for="password">Contraseña:</label>
                                <input type="password" class="form-control" id="password" v-model="password">
                            </div>
                            <button type="submit" class="btn btn-primary btn-block" v-on:click.prevent="login">Iniciar
                                sesión</button>
                        </form>
                        <p class="mt-3 text-center" v-if="error">{{ error }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  



