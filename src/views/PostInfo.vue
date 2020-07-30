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
            <ul class="comments__list">
                <li
                    v-for="item in filteredArray"
                    :key="item.name"
                    class="item"
                >
                    <div class="item__email">
                        {{ item.email }}
                    </div>
                    <div class="item__info">
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.body }}</p>
                    </div>
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

    .comments {
        max-width: 800px;
        margin: 0 auto;

        &__list {
            list-style-type: none;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 0;

            .item {
                display: flex;
                justify-content: space-between;
                box-shadow: 0 1px 20px 0 rgba(0,0,0,.1);

                &__email {
                    display: flex;
                    width: 200px;
                    padding: 20px 10px;
                }

                &__info {
                    display: flex;
                    flex-direction: column;
                    width: 600px;

                    p {
                        text-align: justify;
                    }
                }
            }
        }
    }
}
</style>
