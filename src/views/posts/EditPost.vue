<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h1 class="text-center mb-4">Edit Post</h1>
                <form>
                    <div class="form-group">
                        <label for="title">Titulo:</label>
                        <input type="text" class="form-control" id="title" v-model="post.title">
                    </div>
                    <div class="form-group mb-4">
                        <label for="content">Contenido:</label>
                        <textarea class="form-control" id="content" v-model="post.content"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="updatePost">Editar</button>
                </form>
            </div>
        </div>

    </div>
</template>
  
<script>
import axios from 'axios';
let user_id = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).user_id : '';

export default {
    props: ['id'],
    data() {
        return {
            post: {
                title: '',
                content: '',
                user_id: user_id,
            },
        }
    },
    methods: {
        async updatePost(props) {

            try {
                const response = await axios.post(`http://127.0.0.1:8000/api/Post/${this.$route.params.id}`, this.post, {
                    headers:
                    {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth')).token}`,
                    }
                });
                console.log(response.data);
                // Aquí puedes redirigir al usuario a la página de inicio o realizar alguna otra acción.
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
  