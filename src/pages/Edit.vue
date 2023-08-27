<script setup>
import { onMounted } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';
import { useBookStore } from '../stores/BookStore';
import { useUserStore } from '../stores/UserStore';
import router from '../router';
import axios from 'axios';

const userStore = useUserStore();
const bookStore = useBookStore();

const id = window.location.href.split('/')[4]
bookStore.getBookById(id);


const createBook = function () {
    axios.post(bookStore.API_LINK + '/edit_book', {
        id: id,
        title: bookStore.currentBook[0].title,
        description: bookStore.currentBook[0].description,
        price: bookStore.currentBook[0].price,
        published_at: bookStore.currentBook[0].published_at,
        src: bookStore.currentBook[0].src,
        first_name: bookStore.currentBook[0].first_name,
        last_name: bookStore.currentBook[0].last_name,
        second_name: bookStore.currentBook[0].second_name
    })
        .then(() => {
            router.push('/')
        })
}


onMounted(() => {
    if (userStore.user.role != 'admin') {
        router.push('/')
    }
})

</script>

<template>
    <MainLayout>
        <div class="title_main">Админ панель</div>

        <section class="admin">
            <form @submit.prevent="createBook">
                <div class="tilte">Создать книгу</div>
                <div class="sub_tilte">Книга</div>
                <label for="title">
                    Название
                    <input type="text" id="title" placeholder="Война и мир" v-model="bookStore.currentBook[0].title">
                </label>

                <label for="description">
                    Описание
                    <input type="text" id="description" v-model="bookStore.currentBook[0].description"
                        placeholder="русский исторический (и немного фантастический) роман Льва Толстого, опубликованный в 1865-1869 годах.">
                </label>

                <label for="price">
                    Цена
                    <input type="text" id="price" placeholder="789" v-model="bookStore.currentBook[0].price">
                </label>

                <label for="published_at">
                    Год издания
                    <input type="text" id="published_at" placeholder="1863" v-model="bookStore.currentBook[0].published_at">
                </label>

                <div class="sub_tilte">Обложка</div>
                <label for="src">
                    Ссылка на обложку
                    <input type="text" id="src" placeholder="http://" v-model="bookStore.currentBook[0].src">
                </label>


                <div class="sub_tilte">Автор</div>
                <label for="first_name">
                    Имя
                    <input type="text" id="first_name" placeholder="Лев" v-model="bookStore.currentBook[0].first_name">
                </label>

                <label for="last_name">
                    Фамилия
                    <input type="text" id="last_name" placeholder="Толстой" v-model="bookStore.currentBook[0].last_name">
                </label>

                <label for="second_name">
                    Отчество
                    <input type="text" id="second_name" placeholder="Николаевич" v-model="bookStore.currentBook[0].second_name">
                </label>

                <button class="btn" type="submit">Сохранить</button>
            </form>
        </section>
    </MainLayout>
</template>
