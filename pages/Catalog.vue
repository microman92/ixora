<template>
    <headerSecond />
    <main class="main">
        <div class="catalog__inner">
            <div class="catalog__cards">
                <nuxt-link class="catalog__card" :to="`/catalog/${hotel.id}`" v-for="(hotel) in paginatedItems"
                    :key="hotel.id">
                    <div class="catalog__card_top">
                        <NuxtImg :src="hotel.photo[0].url" :alt="t(hotel.country)" loading="lazy" />
                    </div>
                    <div class="catalog__card_bottom">
                        <div class="card__bottom_left">
                            <p class="card__bottom_left-info">{{ getHotelInfo(hotel) }}</p>
                            <p class="card__bottom_left-desc">{{ t('Completion') }}</p>
                        </div>
                        <div class="catalog__card_bottom-right">
                            <p>{{ hotel.price }}</p>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <Paginate v-model:page="currentPage" :page-count="totalPages" :page-range="2" :margin-pages="2"
                :click-handler="handlePageChange" :container-class="'pagination'" :page-class="'page-item'"
                :prev-text="'<'" :next-text="'>'" :active-class="'active'" prev-class="page-item prev"
                next-class="page-item next" />
        </div>
    </main>
    <footerSecond :links="links" />
</template>

<script setup>
import headerSecond from '~/components/headerSecond.vue'
import footerSecond from '~/components/footerSecond.vue'
import { useHotelsStore } from '~/stores/hotels'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const hoteliersStore = useHotelsStore()
await hoteliersStore.loadHotels()

const { t } = useI18n()

const props = defineProps({
    links: Array
})

const allHotels = computed(() => hoteliersStore.hotels)
const itemsPerPage = ref(6)
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(allHotels.value.length / itemsPerPage.value))

const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return allHotels.value.slice(start, end)
})

const handlePageChange = (page) => {
    currentPage.value = page
}

const getHotelInfo = (hotel) => {
    const starsOrType = hotel.type != '' ? hotel.type : `${hotel.stars} ${hotel.stars ? t('stars') : ''}`
    const roomType = hotel.type === '' ? t('roomsText') : t('roomstypeText')
    const roomsInfo = `${hotel.rooms} ${roomType}`
    return `${t(hotel.country)} / ${starsOrType} / ${roomsInfo}`
}

useSeoMeta({
    title: 'Каталог отелей - IXORA Consalt',
    description: 'Откройте для себя наш каталог отелей, где представлены лучшие предложения по недвижимости от IXORA Consalt.',
    ogTitle: 'Каталог отелей - IXORA Consalt',
    ogDescription: 'Откройте для себя наш каталог отелей, где представлены лучшие предложения по недвижимости от IXORA Consalt.',
    ogImage: 'https://ixora-consalt.com/img/catalog-main.webp',
    ogUrl: 'https://ixora-consalt.com/catalog',
    twitterCard: 'summary_large_image',
})

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "name": "Каталог отелей - IXORA Consalt",
                "description": "Откройте для себя наш каталог отелей, где представлены лучшие предложения по недвижимости от IXORA Consalt.",
                "url": "https://ixora-consalt.com/catalog",
                "publisher": {
                    "@type": "Organization",
                    "name": "IXORA Consalt",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://ixora-consalt.com/img/logo.svg"
                    }
                }
            })
        }
    ],
})
</script>