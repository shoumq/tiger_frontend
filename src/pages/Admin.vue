<script setup>
import { ref, onMounted } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';
import Card from '../components/Card.vue';
import { useBookStore } from '../stores/BookStore';
import { useUserStore } from '../stores/UserStore';
import router from '../router';
import axios from 'axios';

const userStore = useUserStore();
const bookStore = useBookStore();

bookStore.getBooks();

const title = ref(null);
const description = ref(null);
const price = ref(null);
const published_at = ref(null);
const src = ref(null);
const first_name = ref(null);
const last_name = ref(null);
const second_name = ref(null);

const createBook = function () {
    axios.post(bookStore.API_LINK + '/create_book', {
        title: title.value,
        description: description.value,
        price: price.value,
        published_at: published_at.value,
        src: src.value,
        first_name: first_name.value,
        last_name: last_name.value,
        second_name: second_name.value,
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
                    <input type="text" id="title" placeholder="Война и мир" v-model="title">
                </label>

                <label for="description">
                    Описание
                    <input type="text" id="description" v-model="description"
                        placeholder="русский исторический (и немного фантастический) роман Льва Толстого, опубликованный в 1865-1869 годах.">
                </label>

                <label for="price">
                    Цена
                    <input type="text" id="price" placeholder="789" v-model="price">
                </label>

                <label for="published_at">
                    Год издания
                    <input type="text" id="published_at" placeholder="1863" v-model="published_at">
                </label>

                <div class="sub_tilte">Обложка</div>
                <label for="src">
                    Ссылка на обложку
                    <input type="text" id="src" placeholder="http://" v-model="src">
                </label>


                <div class="sub_tilte">Автор</div>
                <label for="first_name">
                    Имя
                    <input type="text" id="first_name" placeholder="Лев" v-model="first_name">
                </label>

                <label for="last_name">
                    Фамилия
                    <input type="text" id="last_name" placeholder="Толстой" v-model="last_name">
                </label>

                <label for="second_name">
                    Отчество
                    <input type="text" id="second_name" placeholder="Николаевич" v-model="second_name">
                </label>

                <button class="btn" type="submit">Создать</button>
            </form>
        </section>

        <div class="grid">
            <Card v-for="(item, index) in bookStore.books"
                :key="index"
                :id="item.id"
                :title="item.title"
                :author="item.first_name + ' ' + item.last_name"
                :price="item.price"
                :src="item.src"
                :route="'/edit/'"
            />
        </div>
    </MainLayout>
</template>


<style lang="scss" scoped>
.grid {
    margin-top: 70px;
}
</style>
