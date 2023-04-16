<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <br>
        <RouterLink to="/post/show">Show my post</RouterLink>
        <br>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    
   
    </div>
    
  </header>

  <RouterView />
</template>