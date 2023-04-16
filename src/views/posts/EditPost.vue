<template>
    <div>
        <form>
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" id="title" v-model="post.title">
            </div>
            <div class="form-group">
                <label for="content">Content:</label>
                <textarea class="form-control" id="content" v-model="post.content"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="updatePost">Update</button>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            post: {},
        };
    },
    methods: {
        async getPost() {
            try {
                const response = await axios.get(`http://localhost:8000/api/Post/${this.$route.params.id}`);
                this.post = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        editPost() {
            this.$router.push({
                name: 'edit-post',
                params: {
                    id: this.post.id,
                },
            });
        },
    },
    created() {
        this.getPost();
    },
};



</script>
  