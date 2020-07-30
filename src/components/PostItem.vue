<template>
    <li class="list__item">
        <router-link 
            :to="{ 
                name: 'post', 
                params: { id: post.id } 
            }" 
            class="title">{{ post.title }}
        </router-link>

        <p class="body">{{ post.body }}</p>
        
        <router-link
            :to="{
                name:'userinfo',
                params: { id: post.userId }
            }"
            class="user_link"
        >
            User Info
        </router-link>
    </li>
</template>

<script>
export default {
    name: "PostItem",
    props: {
        post: {
            type: Object,
        }
    }
};
</script>

<style lang="scss">
.list__item {
    list-style-type: none;
    padding: 16px;
    max-width: 800px;
    margin: 10px auto;
    box-shadow: 0 1px 20px 0 rgba(0,0,0,.1);

    .title {
        text-transform: uppercase;
    }

    .user_link, .title {
        text-decoration: none;
        color: #42b983;
    }

    .title:visited {
        color: #42b983;
    }

    .user_link:visited {
        color: #42b983;
    }

    .title:hover {
        font-weight: bolder;
    }

    .user_link:hover {
        font-weight: bolder;
    }

    .body {
        text-align: justify;
    }
}
</style>
