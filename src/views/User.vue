<template>
    <div class="user" v-if="IS_USER_LOGGING">
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
                    params: { id: 1 }
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
        <div class="wrapper">
            <h1>This is an {{ ALL_USERS[GET_USER_INFO].username }} page</h1>
            <hr>
            <h3>User info:</h3>
            <ul class="list">
                <li class="list__item">
                    <p class="attr">Name:</p>
                    <p class="data">{{ ALL_USERS[GET_USER_INFO].name }}</p>
                </li>
                <li class="list__item">
                    <p class="attr">Username:</p>
                    <p class="data">{{ ALL_USERS[GET_USER_INFO].username }}</p>
                </li>
                <li class="list__item">
                    <p class="attr">E-mail:</p>
                    <p class="data">{{ ALL_USERS[GET_USER_INFO].email }}</p>
                </li>
                <li class="list__item">
                    <p class="attr">Phone:</p>
                    <p class="data">{{ ALL_USERS[GET_USER_INFO].phone }}</p>
                </li>
            </ul>
        </div>
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

<style lang="scss">
    
.wrapper {
    max-width: 400px;
    margin: 0 auto 40px;

    .list {
        padding-inline-start: 0;

        &__item {
            list-style-type: none;
            padding: 16px;
            border-bottom: 1px solid rgba(44, 62, 80, 0.3);
            display: flex;
            justify-content: space-between;
            margin: 10px auto;

            .attr, .data {
                margin-block-start: 0;
                margin-block-end: 0;
            }
        }
    }
}
        
</style>
