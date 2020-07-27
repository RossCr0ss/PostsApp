<template>
    <div class="home">
        <div id="nav">
            <router-link to="/home">Home</router-link> |
            <router-link to="/user">User</router-link> |
            <router-link to="/">Logout</router-link>
        </div>
        <HelloWorld/>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions } from 'vuex'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    data() {
        return {
            info: null
        }
    },
    mounted() {
        this.GET_USERS_FROM_API()
    },
    methods: {
        ...mapActions([
            'GET_USERS_FROM_API'
        ])
    }   
}
</script>
