<template>
    <header class="header-second">
        <div class="header-second__img">
            <NuxtImg class="header-second__bg" :src="pageBg" loading="lazy" alt="Главная картинка страницы каталог" width="1903" height="500" />
        </div>
        <h1 class="second__title">ixora CONSULT</h1>
        <h2 class="second__subtitle">{{ pageName }}</h2>


    </header>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const { t } = useI18n();


const pageName = computed(() => {
    if (route.path == '/catalog') {
        return t('Catalog')
    } else if (route.path == '/services') {
        return t('Services')
    } else if (route.path == '/hoteliers') {
        return t('Hoteliers')
    }
})
const pageBg = computed(() => {
    if (route.path == '/catalog') {
        return '/img/catalog-main.webp'
    } else if (route.path == '/services') {
        return '/img/services-main.webp'
    } else if (route.path == '/hoteliers') {
        return '/img/hoteliers-main.webp'
    }
})




</script>
