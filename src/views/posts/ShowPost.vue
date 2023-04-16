<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const tokenAuth = JSON.parse(localStorage.getItem('auth')).token;
        const user_id = JSON.parse(localStorage.getItem('auth')).user_id;
        const response = await axios.get(`http://127.0.0.1:8000/api/Post/user/${user_id}`, {
          headers: {
            Authorization: `Bearer ${tokenAuth}`, // Utiliza el token del usuario almacenado en la variable user del store de Vuex
          }
        });
        console.log(response.data);
        this.posts = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async deletePost(id) {
      try {
        const tokenAuth = JSON.parse(localStorage.getItem('auth')).token;
       await axios.delete(`http://127.0.0.1:8000/api/Post/${id}`, {
          headers: {
            Authorization: `Bearer ${tokenAuth}`, // Utiliza el token del usuario almacenado en la variable user del store de Vuex
          }
        });
        window.location.reload();


      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    if(!localStorage.getItem('auth')){
        this.$router.push('/login');
      } else {
        this.fetchPosts();

      }
  }
}
</script>
<template>
  <div class="m-4">
    <div class="card">
      <div class="card-body">
        <h1 class="text-center mb-4">Lista de Posts</h1>

        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0" v-for="post in posts" :key="post.id">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">{{ post.title }}</h5>
                <p class="card-text">{{ post.content }}</p>
                <div class="d-flex justify-content-between">
                  <router-link :to="{ name: 'edit', params: { id: post.id } }">Edit</router-link>
                </div>
                <div class="d-flex justify-content-between">
                 <button v-on:click="deletePost(post.id)">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



  