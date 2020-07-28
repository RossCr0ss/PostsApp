<template>
    <div class="home">
        <div id="nav">
            <router-link to="/home">Home</router-link> |
            <router-link :to="'/user/' + userId" >User</router-link> |
            <router-link to="/">Logout</router-link>
        </div>
        <hr>
        {{userId}}
        <hr>
        <PostItem
            v-for="item in POSTS"
            :key="item.id"
            class="postitem"
        >
            <h3 slot="title">{{item.title}}</h3>
            <p slot="info">{{item.body}}</p>
            {{item}}
            <router-link
                slot="link"
                :to="'/user/' + item.userId"
                tag="a"
            >
                User Profile
            </router-link>
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
            info: null,
            userId: null
        }
    },
    computed: {
        ...mapGetters([
            'USERS',
            'POSTS',
            'logUser'
        ])
    },
    created() {
        this.userId = this.$store.state.logUser.id
    },
    mounted() {
        this.GET_USERS_FROM_API(),
        this.GET_POSTS_FROM_API()
    },
        /* this.GET_LOG_USER() */
    methods: {
        ...mapActions([
            'GET_USERS_FROM_API',
            'GET_POSTS_FROM_API'
        ]),
        navigateToUser() {
            this.$router.push({name: 'User', params: {id: this.userId}})
        }
    }   
}
</script>
