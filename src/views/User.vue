<template>
    <div class="user-info" v-if="IS_USER_LOGGING">
        <div id="nav">
            <router-link
                class="link"
                :to="{ name: 'home' }"
            >
                Home
            </router-link>|
            <router-link
                class="link"
                :to="{
                    name: 'user',
                    params: { id: 0 }
                }"
            >
                User
            </router-link>|
            <router-link
                class="link"
                :to="{ name: 'login' }"
            >
                Logout
            </router-link>
        </div>
        <h3>My Info</h3>
        <p><strong>User ID: </strong> {{ ALL_USERS[GET_USER_INFO].id }}</p>
        <p><strong>User Name: </strong>{{ ALL_USERS[GET_USER_INFO].name }}</p>
        <p><strong>User Username: </strong>{{ ALL_USERS[GET_USER_INFO].username }}</p>
        <p><strong>User Email: </strong>{{ ALL_USERS[GET_USER_INFO].email }}</p>
        <p><strong>User Address: </strong>{{ ALL_USERS[GET_USER_INFO].address.street }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'User',
    computed: {
        ...mapGetters([
            'GET_USER_INFO',
            'ALL_USERS',
            'IS_USER_LOGGING'
        ]),
    },
    mounted() {
        if (this.IS_USER_LOGGING === false){
            this.$router.push({ name: 'login' })
        }
    }
}
</script>

<style scoped lang="scss">
 
</style>
