<script setup>
import Header from '../components/Header.vue';
</script>

<template>
    <div>
        <Header />
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>
