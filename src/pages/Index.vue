<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import Card from '../components/Card.vue';
import { useBookStore } from '../stores/BookStore';

const bookStore = useBookStore();

bookStore.getBooks();

</script>

<template>
    <MainLayout>
        <div class="title_main">Все книги</div>
        <div class="grid">
            <Card v-for="(item, index) in bookStore.books"
                :key="index"
                :id="item.id"
                :title="item.title"
                :author="item.first_name + ' ' + item.last_name"
                :price="item.price"
                :src="item.src"
                :route="'/book/'"
            />
        </div>
    </MainLayout>
</template>
