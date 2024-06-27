<template>
    <nav class="nav">
        <div class="nav__left">
            <NuxtLink to="/" class="logo">
                <img src="/img/logo.svg" title="Логотип" alt="Логотип" loading="lazy" width="40" height="58" />
            </NuxtLink>
            <div class="nav__lang">
                <button class="nav__lang_rus" @click="changeLocale('en')">eng</button>
                <button class="nav__lang_eng" @click="changeLocale('ru')">rus</button>
            </div>
        </div>
        <div class="nav__right" :class="{ active: burgerMenu }">
            <ul class="nav__list">
                <li v-for="(link, i) in links" :key="i">
                    <NuxtLink :to="link.url" class="nav__list_link" @click="closeMenu">{{ $t(link.name) }} </NuxtLink>
                </li>
            </ul>

            <div class="nav__contacts">
                <a href="tel:+79651234567" class="nav__contacts_tel">+7 965 123-45-67</a>
                <button class="nav__contacts_btn" @click="request">{{ $t('navBtn') }}</button>
            </div>

            <button class="menu-close" @click="closeMenu">
                <img src="/img/close.svg" alt="закрыть">
            </button>

        </div>
        <button class="menu" @click="toggleMenu">
            <img src="/img/menu.svg" alt="menu">
        </button>

    </nav>

    <NuxtPage :links="links" />

    <modal v-show="hotelsStores.contactModal" @close-request="close" />



</template>

<script setup>
import modal from '~/components/modal.vue';
const hotelsStores = useHotelsStore()

const links = ref([
    { name: 'Home', url: '/' },
    { name: 'Catalog', url: '/catalog' },
    { name: 'Services', url: '/services' },
    { name: 'Hoteliers', url: '/hoteliers' }
])

const requestOpen = ref(false)
const burgerMenu = ref(false)

const request = () => {
    hotelsStores.contactModal = true
}

const close = () => {
    hotelsStores.contactModal = false
}

const toggleMenu = () => {
    burgerMenu.value = !burgerMenu.value;
};

const closeMenu = () => {
    burgerMenu.value = false;
};

const handleClickOutside = (event) => {
    const navRight = document.querySelector('.nav__right');
    if (navRight && !navRight.contains(event.target) && !event.target.closest('.menu')) {
        burgerMenu.value = false;
    }
};

const { locale } = useI18n()

const changeLocale = (lang) => {
    locale.value = lang
    if (typeof window !== 'undefined') {
        localStorage.setItem('locale', lang)
    }
}

watchEffect(() => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('locale', locale.value)
    }
})

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "IXORA Consalt",
                "url": "https://ixora-consalt.com",
                "logo": "https://ixora-consalt.com/img/logo.svg",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+7-965-123-45-67",
                    "contactType": "Customer Service"
                },
                "sameAs": [
                    "https://www.facebook.com/ixora-consalt",
                    "https://twitter.com/ixora-consalt",
                    "https://www.instagram.com/ixora-consalt"
                ]
            })
        }
    ],
    meta: [
        { name: 'description', content: 'IXORA Consalt предлагает лучшие услуги по недвижимости.' },
        { name: 'keywords', content: 'IXORA, недвижимость, консалтинг, покупка, продажа, аренда, услуги под ключ' },
        { property: 'og:title', content: 'IXORA Consalt - Ведущие консультанты по недвижимости' },
        { property: 'og:description', content: 'IXORA Consalt предлагает лучшие услуги по недвижимости. Узнайте больше о наших проектах и услугах.' },
        { property: 'og:image', content: 'https://ixora-consalt.com/img/main-buy.webp' },
        { property: 'og:url', content: 'https://ixora-consalt.com' },
        { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
});


onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});


</script>
