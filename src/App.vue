<script setup>
import { RouterLink, RouterView } from 'vue-router'
let username = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).user : null
let authSession = localStorage.getItem('auth') ? true : false

const logout = () => {
  localStorage.clear();
}
</script>

<template>
  <div class="container">
    <header>
      <div class="container text-center">
        <!-- Registro -->
        <div class="card" v-if="!authSession">
          <div class="card-body">
            <RouterLink :class="`btn btn-success`" to="/register">Register</RouterLink>
          </div>
        </div>
        <!-- Log in -->
        <div class="card" v-if="!authSession">
          <div class="card-body">
            <RouterLink :class="`btn btn-success`" to="/login">Login</RouterLink>
          </div>
        </div>
        <!-- Bienvenida -->
        <div class="card" v-if="authSession">
          <div class="card-body">
            {{ `Bienvenido: ${username}` }} </div>
        </div>
        <!-- home -->
        <div class="card" v-if="authSession">
          <div class="card-body">
            <RouterLink :class="`btn btn-success`" to="/">Home</RouterLink>
          </div>
        </div>
        <!-- Create a post -->
        <div class="card" v-if="authSession">
          <div class="card-body">
            <RouterLink :class="`btn btn-success`" to="/post/create">Create a post</RouterLink>
          </div>
        </div>

        <!-- Show post -->
        <div class="card" v-if="authSession">
          <div class="card-body">
            <RouterLink :class="`btn btn-success`" to="/post/show">Show Post</RouterLink>
          </div>
        </div>
        <!-- Logout -->
        <div class="card" v-if="authSession">
          <div class="card-body">
            <a href="" class="btn btn-success" v-on:click="logout()">Logout</a>
          </div>


        </div>




      </div>

    </header>

    <RouterView />
  </div>
</template>