<script setup>
import { onMounted, ref } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';
import { useBookStore } from '../stores/BookStore';
import axios from 'axios';

const bookStore = useBookStore();

const name = ref(null);
const email = ref(null);
const password = ref(null);
const password_confirmed = ref(null);

const registerStore = function () {
    axios.post(bookStore.API_LINK + '/register', {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmed: password_confirmed.value
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
            <div class="title_main">Создать аккаунт</div>

            <form @submit.prevent="registerStore">
                <div class="login">
                    <label for="name">
                        Имя
                        <input type="text" id="name" placeholder="Андрей" v-model="name">
                    </label>

                    <label for="email">
                        Email
                        <input type="email" id="email" placeholder="example@mail.ru" v-model="email">
                    </label>

                    <label for="password">
                        Пароль
                        <input type="password" id="password" v-model="password">
                    </label>

                    <label for="password">
                        Повторите пароль
                        <input type="password" id="password" v-model="password_confirmed">
                    </label>
                </div>

                <button class="btn" type="submit">Создать</button>
            </form>
        </div>
    </MainLayout>
</template>
