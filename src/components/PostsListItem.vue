<template>
    <li class="list-item">
        <router-link 
            :to="{ 
                name: 'post', 
                params: { id: post.id } 
            }" 
            class="list-item__title">{{ post.title }}
        </router-link>

        <p class="list-item__body">{{ post.body }}</p>
        
        <router-link
            :to="{
                name:'userinfo',
                params: { id: post.userId }
            }"
        >
            User Info
        </router-link>
    </li>
</template>

<script>
export default {
    name: "PostsListItem",
    props: {
        post: {
            type: Object,
        }
    }
};
</script>

<style scoped lang="scss">
</style>
