<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      
        <div class="card">
          <div class="card-body">
            <RouterLink to="/">Home</RouterLink>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <RouterLink to="/post/show">Show my post</RouterLink>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <RouterLink to="/register">Register</RouterLink>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <RouterLink to="/login">Login</RouterLink>
          </div>


      
        </div>

    </div>

  </header>

  <RouterView />
</template>