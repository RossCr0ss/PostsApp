<template>
    <div class="home">
        <div id="nav">
            <router-link to="/home">Home</router-link> |
            <router-link to="/user">User</router-link> |
            <router-link to="/">Logout</router-link>
        </div>
        <PostItem
            v-for="item in POSTS"
            :key="item.id"
            class="postitem"
        >
            <h3 slot="title" class="title">{{item.title}}</h3>
            <p slot="info" class="subtitle">{{item.body}}</p>
        </PostItem>
    </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Home',
    components: {
        PostItem
    },
    data() {
        return {
            info: null
        }
    },
    computed: {
        ...mapGetters([
            'USERS',
            'POSTS'
        ])
    },
    mounted() {
        this.GET_USERS_FROM_API(),
        this.GET_POSTS_FROM_API()
    },
    methods: {
        ...mapActions([
            'GET_USERS_FROM_API',
            'GET_POSTS_FROM_API'
        ]),
    }   
}
</script>
