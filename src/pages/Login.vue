<script setup>
import { onMounted, ref } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';
import { useBookStore } from '../stores/BookStore';
import axios from 'axios';
import router from '../router';

const bookStore = useBookStore();

const email = ref(null);
const password = ref(null);

const login = function () {
    axios.post(bookStore.API_LINK + '/auth/login', {
        email: email.value,
        password: password.value
    })
        .then((response) => {
            localStorage.setItem('access_token', response.data.access_token);
            router.push('/')
        })
}

onMounted(() => {
    if (localStorage.getItem('access_token')) {
        router.push('/')
    }
})

</script>

<template>
    <MainLayout>
        <div class="auth">
            <div class="title_main">Войти</div>

            <form @submit.prevent="login">
                <div class="login">
                    <label for="email">
                        Email
                        <input type="email" id="email" placeholder="example@mail.ru" v-model="email">
                    </label>

                    <label for="password">
                        Пароль
                        <input type="password" id="password" v-model="password">
                    </label>
                </div>

                <div class="flex">
                    <button class="btn" type="submit">Войти</button>
                    <router-link to="/register">Еще нет аккаунта?</router-link>
                </div>
            </form>
        </div>
    </MainLayout>
</template>
