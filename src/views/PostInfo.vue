<template>
    <div>
        <div id="nav">
            <router-link
                class="link"
                :to="{ name: 'home' }"
                >Home
            </router-link>|
            <router-link
                class="link"
                :to="{
                    name:'user',
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
        <div v-if="IS_USER_LOGGING" class="info">
            <p class="info__id">Post: {{ ALL_POSTS[this.id-1].id }}</p>
            <p class="info__title">{{ ALL_POSTS[this.id-1].title }}</p>
            <p class="info__body">{{ ALL_POSTS[this.id-1].body }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "PostInfo",
    data() {
        return {
            render: null,
        };
    },
    props: ["id"],
    computed: {
        ...mapGetters(["ALL_POSTS", "IS_USER_LOGGING"]),
    },
    mounted() {
        if (this.IS_USER_LOGGING === false) {
            this.$router.push({ name: "login" });
        }
    },
};
</script>

<style scoped lang="scss">
</style>
