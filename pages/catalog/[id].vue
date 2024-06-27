<template>
    <main class="main-hotels" v-if="hotel">
        <div class="hotels__images">
            <div class="hotels__img" v-for="(photo, i) in hotel.photo" @click="handleLastClick(i)">
                <NuxtImg :src="photo.url" :alt="photo.alt" loading="lazy" />
            </div>
            <Transition name="modal">
                <MySlider :photos="hotel.allPhoto" :modalOpen="modalOpen" @close-modal="close" v-if="modalOpen" />
            </Transition>
        </div>
        <section class="hotels__info">
            <div class="hotels__desc">
                <h1 class="hotels__desc_title">{{ t('MODERN_hotel') }}</h1>
                <div class="hotels__desc_breadcrambs">
                    <p> {{ breadcrumbs }}</p>
                </div>
                <p class="hotels__desc_text">{{ t('hotelDescription1') }}</p>
            </div>
            <div class="hotels__details">
                <h2 class="hotels__details_title">{{ t('Brief_Information') }}</h2>
                <div class="hotels__details_items">
                    <div class="hotels__details-info hotels__details_icons hotels__details_left">
                        <div class="hotels__details_icon">
                            <img src="/img/bedroom.svg" alt="спальня">
                            <span>{{ hotel.bedrooms }}</span>
                        </div>
                        <div class="hotels__details_icon">
                            <img src="/img/washroom.svg" alt="ванная">
                            <span>{{ hotel.bathrooms }}</span>
                        </div>
                        <div class="hotels__details_icon">
                            <img src="/img/parking.svg" alt="парковка">
                            <span>{{ hotel.parking }}</span>
                        </div>
                    </div>
                    <div class="hotels__details-info hotels__details_right">
                        <div class="hotels__details-info__left">
                            <p>Жилая площадь</p>
                            <span>{{ hotel.livingArea }}</span>
                        </div>
                        <div class="hotels__details-info__right">
                            <p>Общая площадь</p>
                            <span>{{ hotel.allArea }}</span>
                        </div>
                    </div>
                    <div class="hotels__details-info hotels__details_left">
                        <div class="hotels__details-info_text">
                            <p>Расположение</p>
                            <span>{{ t(hotel.country) }}, {{ t(hotel.city) }}</span>
                        </div>
                    </div>
                    <div class="hotels__details-info hotels__details_right">
                        <div class="hotels__details-info__left">
                            <p>Ресторан</p>
                            <span>{{ hotel.restaurant ? t('yes') : t('no') }}</span>
                        </div>
                        <div class="hotels__details-info__right">
                            <p>До пляжа</p>
                            <span>{{ hotel.beach }}</span>
                        </div>
                    </div>
                    <div class="hotels__details-info hotels__details_left">
                        <div class="hotels__details-info_text">
                            <p>Статус</p>
                            <span>{{ t(hotel.status) }}</span>
                        </div>
                    </div>
                    <div class="hotels__details-info hotels__details_right">
                        <div class="hotels__details-info__left">
                            <p>Ресторан</p>
                            <span>{{ hotel.restaurant ? t('yes') : t('no') }}</span>
                        </div>
                        <div class="hotels__details-info__right">
                            <p>До пляжа</p>
                            <span>{{ hotel.beach }}</span>
                        </div>
                    </div>
                </div>
                <div class="hotels__details_btns">
                    <a href="#!" class="hotels__details-info hotels__details_pdf" @click="downloadPdf">{{ t('download')
                        }}</a>
                    <p class="hotels__details-info hotels__details_price">{{ hotel.price }}</p>
                    <a href="tel:+79651234567" class="hotels__details-info hotels__details_icon hotels__details_phone">
                        <img src="/img/phone.svg" alt="инонка телефона">
                    </a>
                </div>
            </div>
        </section>
        <div id="map" class="map-container" ></div>
    </main>
    <div v-else>
        <p>Отель не найден.</p>
    </div>
    <footerSecond :links="links" />
</template>

<script setup>
import footerSecond from '~/components/footerSecond.vue'
import MySlider from '~/components/MySlider.vue'
import L from 'leaflet'
import { useRoute } from 'vue-router'
import { useHotelsStore } from '~/stores/hotels'
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const props = defineProps({ links: Array })
const route = useRoute()
const hoteliersStore = useHotelsStore()
const hotelId = route.params.id
const modalOpen = ref(false)

const lastPhotoIndex = computed(() => hotel.value.photo.length - 1)

const handleLastClick = (i) => i == lastPhotoIndex.value ? modalOpen.value = true : ''

const close = () => modalOpen.value = false

const breadcrumbs = computed(() => {
    const starsOrType = hotel.value.type != '' ? hotel.value.type : `${hotel.value.stars} ${hotel.value.stars ? t('stars') : ''}`
    const roomType = hotel.value.type === '' ? t('roomsText') : t('roomstypeText')
    const roomsInfo = `${hotel.value.rooms} ${roomType}`
    return ` ${t(hotel.value.country)} / ${starsOrType} / ${roomsInfo}`
})

const downloadPdf = () => {
    const pdfUrl = hoteliersStore.pdfUrl
    const link = document.createElement('a')
    link.href = pdfUrl
    link.setAttribute('download', 'hotel.pdf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

const { data: hotel, error, pending: loading } = await useAsyncData(async () => {
    await hoteliersStore.loadHotelById(hotelId)
    return hoteliersStore.hotelsById
})

useSeoMeta(() => ({
    title: hotel.value ? `${hotel.value.name} - IXORA Consalt` : 'Отель не найден - IXORA Consalt',
    ogTitle: hotel.value ? hotel.value.name : 'Отель не найден',
    description: hotel.value ? hotel.value.description : 'Описание отеля не доступно.',
    ogDescription: hotel.value ? hotel.value.description : 'Описание отеля не доступно.',
    ogImage: hotel.value ? hotel.value.photo[0]?.url : '/img/default-image.jpg',
    ogUrl: `https://ixora-consalt.com/catalog/${hotelId}`,
    twitterCard: 'summary_large_image',
}))

useHead(() => ({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Hotel",
                "name": hotel.value ? hotel.value.name : 'Отель не найден',
                "description": hotel.value ? hotel.value.description : 'Описание отеля не доступно.',
                "url": `https://ixora-consalt.com/catalog/${hotelId}`,
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": hotel.value ? hotel.value.city : '',
                    "addressCountry": hotel.value ? hotel.value.country : ''
                },
                "image": hotel.value ? hotel.value.photo.map(photo => photo.url) : '',
                "priceRange": hotel.value ? hotel.value.price : '',
                "telephone": "+7-965-123-45-67",
                "amenityFeature": [
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "Жилая площадь",
                        "value": hotel.value ? hotel.value.livingArea : ''
                    },
                    {
                        "@type": "LocationFeatureSpecification",
                        "name": "Общая площадь",
                        "value": hotel.value ? hotel.value.allArea : ''
                    }
                ]
            })
        }
    ],
}))

onMounted(() => {
    // Инициализация карты
    const map = L.map('map').setView([20.6316, -105.2287], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const customIconUrl = '/img/marker-icon.svg';

    const customIcon = L.icon({
        iconUrl: customIconUrl,
        iconSize: [38, 95], 
        iconAnchor: [22, 94], 
        popupAnchor: [-3, -76] 
    });

    // Добавление маркера с пользовательским значком
    L.marker([20.6316, -105.2287],{ icon: customIcon }).addTo(map)
        .bindPopup('Гангу, Мексика')
        .openPopup();
});
</script>

<style lang="scss"></style>