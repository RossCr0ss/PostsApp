<template>
    <div class="post">
        <slot
            name="title"
            class="post__title"
        />
        <slot
            name="info"
            class="post__info"
        />
        <slot
            name="link"
            class="post__link"
        />
       
    </div>
</template>

<script>
export default {
    name: 'PostItem'
}
</script>

<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
a {
    color: #42b983;
}
.post {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgreen;
    border-radius: 4px;
    padding: 10px;
    margin: 5px auto;
    max-width: 800px;

    &__title {
        color: black;
        text-transform: uppercase
    }
}
</style>
