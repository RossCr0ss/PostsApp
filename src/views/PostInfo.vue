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
        <div class="comments">
            <hr/>
            <ul>
                <li
                    v-for="item in filteredArray"
                    :key="item.name"
                >
                    {{item}}
                </li>
            </ul>
            <hr>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "PostInfo",
    data() {
        return {
            filteredArray: []
        };
    },
    props: ["id"],
    computed: {
        ...mapGetters([
            "ALL_POSTS",
            "IS_USER_LOGGING",
            "ALL_COMMENTS"
        ]),
    },
    created() {
        for (let index = 0; index < this.ALL_COMMENTS.length; index++) { 
            let element = this.ALL_COMMENTS[index]
            if (this.ALL_COMMENTS[index].postId === this.id) {
                this.filteredArray.push(element)
            }
        }
    },

    mounted() {
        if (this.IS_USER_LOGGING === false) {
            this.$router.push({ name: "login" });
        } else {
            this.GET_COMMENTS()
        }
    },
    methods: {
        ...mapActions([
            "GET_COMMENTS"
        ])
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
