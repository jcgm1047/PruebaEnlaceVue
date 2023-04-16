<script setup>
import { RouterLink, RouterView } from 'vue-router'
let username = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).user : null
let authSession = localStorage.getItem('auth') ? true : false

const logout = () => {
  localStorage.clear();
}
</script>

<template>
  <header>
    <div class="wrapper">
 
      <div class="card" v-if="!authSession || authSession === null">
        <div class="card-body">
          <RouterLink to="/register">Register</RouterLink>
        </div>
      </div>
      <div class="card" v-if="!authSession || authSession === null">
        <div class="card-body">
          <RouterLink to="/login">Login</RouterLink>
        </div>
      </div>
      <div class="card" v-if="authSession">
        <div class="card-body">
          {{ `Bienvenido: ${username}` }} </div>
      </div>
      <div class="card" v-if="authSession">
        <div class="card-body">
          <RouterLink to="/" >Home</RouterLink>
        </div>
      </div>
      <div class="card" v-if="authSession">
        <div class="card-body">
          <RouterLink to="/post/show" >Show Post</RouterLink>
        </div>
      </div>
      <div class="card" v-if="authSession">
        <div class="card-body">
          <RouterLink to="/post/create">Create a post</RouterLink>
        </div>
      </div>
      <div class="card" v-if="authSession">
        <div class="card-body">
          <a href="" v-on:click="logout()">Logout</a>
        </div>
    
  
      </div>




    </div>

  </header>

  <RouterView />
</template>