<template>
    <div class="card my-4">
        <div class="card-body">
            <form @submit.prevent="createPost">
        <div class="form-group">
            <label for="title">Título</label>
            <input type="text" class="form-control" id="title" v-model="title" required>
        </div>
        <div class="form-group mb-4">
            <label for="content">Contenido</label>
            <textarea class="form-control" id="content" v-model="content" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Crear post</button>
    </form>
        </div>
    </div>
    
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            title: '',
            content: '',
        };
    },
    methods: {
        async createPost() {
            console.log(JSON.parse(localStorage.getItem('auth')))
            const tokenAuth = JSON.parse(localStorage.getItem('auth')).token;
            const user_id = JSON.parse(localStorage.getItem('auth')).user_id;
            try {
                const response = await axios.post(`http://127.0.0.1:8000/api/Post`, {
                    title: this.title,
                    content: this.content,
                    user_id: user_id, // Utiliza el ID del usuario almacenado en la variable user del store de Vuex
                }, {
                    headers: {
                        Authorization: `Bearer ${tokenAuth}`, // Utiliza el token del usuario almacenado en la variable user del store de Vuex
                    }
                });
                console.log(response.data);
                // Aquí puedes mostrar un mensaje de éxito y redirigir al usuario a la página de detalle del post
            } catch (error) {
                console.error(error);
            }
        },
    },
    mounted() {
      if(!localStorage.getItem('auth')){
        this.$router.push('/login');
      }
    }
  };
  </script>
  