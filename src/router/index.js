import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/user/Login.vue'
import Register from '../views/user/Register.vue'
import ShowPost from '../views/posts/ShowPost.vue'
import CreatePost from '../views/posts/CreatePost.vue'
import EditPost from '../views/posts/EditPost.vue'


const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
        },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/post/show',
      name: 'show-post',
      component: ShowPost,
    
    },
    {
      path: '/post/create',
      name: 'create-post',
      component: CreatePost
    },
    {
      path: '/posts/edit/:id',
      name: 'edit',
      component: EditPost,
      props: true
    },
    

    ]
})

export default router
