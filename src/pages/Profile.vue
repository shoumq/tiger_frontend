<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import router from '../router';
import { useUserStore } from '../stores/UserStore';
import { onMounted } from 'vue';

const userStore = useUserStore();
userStore.getUserData();

// onMounted(() => {
//     if (!localStorage.getItem('access_token')) {
//         router.push('/')
//     }
// })
</script>

<template>
    <MainLayout>
        <div class="profile">
            <div class="title_main">Профиль</div>

            <div class="user_info">
                <div class="user_info--item">Имя: {{ userStore.user.name }}</div>
                <div class="user_info--item">Email: {{ userStore.user.email }}</div>
                <div class="user_info--item">Роль: {{ userStore.user.role }}</div>
            </div>

            <div class="flex">
                <button class="btn" @click="userStore.logout">Выйти</button>
                <button class="btn" v-if="userStore.user.role === 'admin'" @click="router.push('/admin')">Админ панель</button>
            </div>
        </div>
    </MainLayout>
</template>


<style lang="scss" scoped>
.btn {
    margin-top: 30px;
}

.flex {
    display: flex;
    gap: 30px;
}
</style>
