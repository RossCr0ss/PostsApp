<template>
    <div class="user">
        <div id="nav">
            <router-link to="/home">Home</router-link> |
            <router-link :to="'/user/' + userId">User</router-link> |
            <router-link to="/">Logout</router-link>
        </div>
        <h1>This is an {{userById.username}} page</h1>
        {{userById}}
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            userId: null
        }
    },
    computed: {
        ...mapGetters([
            'userById'
        ])
    },
    /* created() {
        this.userId = this.$store.state.logUser.id
    },
    mounted() {
        this.GET_USERS_FROM_API(),
        this.GET_POSTS_FROM_API()
    },
    methods: {
        ...mapActions([
            'GET_USERS_FROM_API',
            'GET_POSTS_FROM_API'
        ])
    }  */
}
</script>
