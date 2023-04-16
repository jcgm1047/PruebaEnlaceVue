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
        const response = await axios.get('http://127.0.0.1:8000/api/Post');
        console.log(response.data);
        this.posts = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    if(!localStorage.getItem('auth')){
        this.$router.push('/login');
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
                <div>
                  <h1>{{ post.title }}</h1>
                  <p>{{ post.content }}</p>
                  <button @click="deletePost">Delete</button>
                  <button @click="editPost">Editar</button>
                </div>
                
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



  