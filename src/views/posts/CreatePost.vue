<template>
    <form @submit.prevent="createPost">
      <div class="form-group">
        <label for="title">Título</label>
        <input type="text" class="form-control" id="title" v-model="title" required>
      </div>
      <div class="form-group">
        <label for="content">Contenido</label>
        <textarea class="form-control" id="content" v-model="content" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Crear post</button>
    </form>
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
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/Post', {
            title: this.title,
            content: this.content,
            user_id: 5, // Utiliza el ID del usuario almacenado en la variable user del store de Vuex
          }, {
            headers: {
              Authorization: `Bearer 19|gxyMOBozJHUEcjezG8JotNc3pTASAuuszO6Eujwr`, // Utiliza el token del usuario almacenado en la variable user del store de Vuex
            }
          });
          console.log(response.data);
          // Aquí puedes mostrar un mensaje de éxito y redirigir al usuario a la página de detalle del post
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  