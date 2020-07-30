<template>
    <div v-if="IS_USER_LOGGING">
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
        <div class="wrapper">
        <h3>Post user info:</h3>
            <ul class="list">
                <li class="list__item">
                    <p class="attr">Name:</p>
                    <p class="data">{{ ALL_USERS[this.id-1].name }}</p>
                </li>
                <li class="list__item">
                    <p class="attr">Username:</p>
                    <p class="data">{{ ALL_USERS[this.id-1].username }}</p>
                </li>
                <li class="list__item">
                    <p class="attr">E-mail:</p>
                    <p class="data">{{ ALL_USERS[this.id-1].email }}</p>
                </li>
                <li class="list__item">
                    <p class="attr">Phone:</p>
                    <p class="data">{{ ALL_USERS[this.id-1].phone }}</p>
                </li>
            </ul>
        </div>

        <ul class="list">
            <h3>User posts:</h3>
                <li
                    class="list__item"
                    v-for="post in this.arrayUserPosts"
                    :key="post.id"
                >
                    <h4 class="title">{{ post.title }}</h4>
                    <p class="body">{{ post.body }}</p>
                </li>
            </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "UserInfo",
    data() {
        return {
            arrayUserPosts: [],
        };
    },
    props: ["id"],
    computed: {
        ...mapGetters([
            "ALL_USERS",
            "ALL_POSTS",
            "IS_USER_LOGGING"
        ])
    },
    mounted() {
        if (this.IS_USER_LOGGING === false) {
            this.$router.push({ name: "login" })
        } else {
            for (let i = 0; i < this.ALL_POSTS.length; i++) {
                if (this.ALL_POSTS[i].userId === this.id) {
                    this.arrayUserPosts.push(this.ALL_POSTS[i]);
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
</style>
