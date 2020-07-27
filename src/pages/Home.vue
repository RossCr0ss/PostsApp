<template>
    <div class="home">
        <div id="nav">
            <router-link to="/home">Home</router-link> |
            <router-link to="/user">User</router-link> |
            <router-link to="/">Logout</router-link>
        </div>
        <PostItem
            v-for="item in USERS"
            :key="item.id"
            class="postitem"
        >
            <h3 slot="title" class="title">{{item.name}}</h3>
            <p slot="info" class="subtitle">{{item.username}}</p>
            <p slot="info" class="subtitle">{{item.email}}</p>
            <p slot="info" class="subtitle">{{item.phone}}</p>
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
            'USERS'
        ])
    },
    mounted() {
        this.GET_USERS_FROM_API()
    },
    methods: {
        ...mapActions([
            'GET_USERS_FROM_API'
        ]),
    }   
}
</script>
