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
    this.fetchPosts();
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

                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>



  