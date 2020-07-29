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
        <h3>Info about user who left that post</h3>
        <p>
            <strong>User Id:</strong>
            {{ ALL_USERS[this.id].id }}
        </p>
        <p>
            <strong>User Name:</strong>
            {{ ALL_USERS[this.id].name }}
        </p>
        <p>
            <strong>User UserName:</strong>
            {{ ALL_USERS[this.id].username }}
        </p>
        <p>
            <strong>User Email:</strong>
            {{ ALL_USERS[this.id].email }}
        </p>
        <p>
            <strong>User Address:</strong>
            {{ ALL_USERS[this.id].address.street }}
        </p>
        <ul class="">
        <label class="">All User POSTS</label>
            <li
                class=""
                v-for="post in this.arrayUserPosts"
                :key="post.id"
            >
                <h4 class>{{ post.title }}</h4>
                <p class>{{ post.body }}</p>
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
