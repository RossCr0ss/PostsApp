<template>
    <div>
        <div id="nav">
            <router-link
                class="link"
                :to="{
                    name: 'home'
                }"
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
                :to="{
                    name:'login'
                }"
            >
            Logout
            </router-link>
        </div>
        <PostsList v-bind:posts="ALL_POSTS" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostsList from "@/components/PostsList";

export default {
    name: "Home",
    components: { 
        PostsList 
        },
    computed: {
        ...mapGetters([
            "IS_USER_LOGGING", 
            "ALL_POSTS"
        ]),
    },
    methods: {
        ...mapActions([
            "GET_POSTS"
        ]),
    },
    mounted() {
        if (this.IS_USER_LOGGING === false) {
            this.$router.push({ name: "login" });
        } else {
            this.GET_POSTS();
        }
    },
};
</script>

<style scoped>
</style>
