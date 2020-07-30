<template>
    <ul class="list">
        <PostItem
            v-for="post in allPosts" 
            :key="post.id" 
            v-bind:post="post"
        />
    </ul>
</template>

<script>
import PostItem from "@/components/PostItem"

export default {
    name: "PostsList",
    components: { 
        PostItem 
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
    },
}
</script>

<style scoped lang="scss">

.list {
    padding-inline-start: 0;
}

</style>
