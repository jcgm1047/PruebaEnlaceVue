<template>
    <div>
      <form>
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" class="form-control" id="title" v-model="post.title">
        </div>
        <div class="form-group">
          <label for="content">Content:</label>
          <textarea class="form-control" id="content" v-model="post.content"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="updatePost">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        post: {
          title: '',
          content: '',
          user_id: '',
        },
      }
    },
    methods: {
      async updatePost() {
        try {
          const response = await axios.put(`http://localhost:8000/api/Post/5`, this.post);
          console.log(response.data);
          // Aquí puedes redirigir al usuario a la página de inicio o realizar alguna otra acción.
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  