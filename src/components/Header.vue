<script setup>
import { useUserStore } from '../stores/UserStore';

const userStore = useUserStore();
const isAuth = localStorage.getItem('access_token') != null

if (isAuth) {
    userStore.getUserData();
}

</script>


<template>
    <header @click="getUserData">
        <div class="container">
            <div class="flex">
                <a href="/" class="item">Главная</a>
                <a href="/profile" class="item" v-if="isAuth">{{ userStore.user.name }}</a>
                <a href="/login" class="item" v-else>Войти</a>
            </div>
        </div>
    </header>
</template>
