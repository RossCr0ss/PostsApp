<template>
    <div class="post_info">
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
        <div 
            v-if="IS_USER_LOGGING"
            class="item"
        >   
            <h3>Post #{{ ALL_POSTS[this.id-1].id }}</h3>
            <p class="item__title">{{ ALL_POSTS[this.id-1].title }}</p>
            <p class="item__body">{{ ALL_POSTS[this.id-1].body }}</p>
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
.post_info {
    .item {
        padding: 16px;
        max-width: 800px;
        margin: 10px auto;

        &__title {
            text-transform: uppercase;
            color: #42b983;
        }

        &__body {
            text-align: justify;
        }
    }
}
</style>
