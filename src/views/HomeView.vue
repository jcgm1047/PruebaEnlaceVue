<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: []
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
 
</template>
