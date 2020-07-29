<template>
    <ul class="list">
        <PostsListItem
            v-for="post in allPosts" 
            :key="post.id" 
            v-bind:post="post"
        />
    </ul>
</template>

<script>
import PostsListItem from "@/components/PostsListItem";

export default {
    name: "PostsList",
    components: { 
        PostsListItem 
    },
    props: {
        posts: {
            type: Array,
        },
    },
    computed: {
        allPosts() {
            return this.posts;
        }
    }
}
</script>

<style scoped lang="scss">
</style>
