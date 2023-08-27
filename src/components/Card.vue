<script setup>
defineProps({
    id: Number,
    price: Number,
    title: String,
    author: String,
    src: String,
    route: String
})
</script>


<template>
    <router-link :to="route + id" class="card">
        <img :src="src" alt="">
        <div class="price">{{ price }} ₽</div>
        <div class="title">{{ title }}</div>
        <div class="author">{{ author }}</div>
    </router-link>
</template>


<style lang="scss" scoped>
a {
    color: black;
    text-decoration: none;
}
</style>
