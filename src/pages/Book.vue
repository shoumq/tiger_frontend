<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import { useBookStore } from '../stores/BookStore';
import { onMounted } from 'vue';

const bookStore = useBookStore();

const id = window.location.href.split('/')[4]

bookStore.getBookById(id);

</script>

<template>
    <MainLayout>
        <div class="book">
            <div class="flex">
                <img :src="bookStore.currentBook[0].src"
                    alt="">
                <div class="info">
                    <div class="row">
                        <div class="flex_title">{{ bookStore.currentBook[0].title }}</div>
                        <div class="flex_author">{{ bookStore.currentBook[0].first_name }} {{
                            bookStore.currentBook[0].last_name }}</div>
                    </div>
                    <div class="flex_date">
                        <div class="gray">Год издания:</div>
                        <div class="date">{{ bookStore.currentBook[0].published_at }}</div>
                    </div>
                </div>
            </div>

            <div class="desc">Описание: {{ bookStore.currentBook[0].description }}</div>
            <div class="price">Цена: {{ bookStore.currentBook[0].price }} ₽</div>
        </div>
    </MainLayout>
</template>
