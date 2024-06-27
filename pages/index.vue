<template>
    <header class="header">
        <section class="hero">
            <h1 class="hero__title title">ixora consalt</h1>
            <div class="hero__video">
                <video ref="videoElement" src="/assets/video/video.webm" autoplay muted loop playsinline
                    type="video/webm" preload="metadata" loading="lazy"></video>
            </div>
        </section>
    </header>
    <main class="main">
        <div class="property-options">
            <div class="property-option">
                <nuxtLink to="/services#sell">
                    <NuxtImg src="/img/main-buy.webp" alt="картинка сервиса покупки" width="584" height="340" />
                    <div class="property-option__content">
                        <img class="property-option__content_arrow" src="/img/arrow.svg" alt="Стрелка">
                        <h3 class="property-option__content_title">{{ t('Sale') }}</h3>
                    </div>
                </nuxtLink>
            </div>
            <div class="property-option">
                <nuxtLink to="/services#buy">
                    <NuxtImg src="/img/main-sell.webp" alt="картинка сервиса продажи" width="584" height="340" />
                    <div class="property-option__content">
                        <img class="property-option__content_arrow" src="/img/arrow.svg" alt="Стрелка">
                        <h3 class="property-option__content_title">{{ t('Purchase') }}</h3>
                    </div>
                </nuxtLink>
            </div>
            <div class="property-option">
                <nuxtLink to="/services#turnkey">
                    <NuxtImg src="/img/main-turnkey.webp" alt="картинка сервиса под ключ" width="584" height="340" />
                    <div class="property-option__content">
                        <img class="property-option__content_arrow" src="/img/arrow.svg" alt="Стрелка">
                        <h3 class="property-option__content_title">{{ t('Turnkey') }}</h3>
                    </div>
                </nuxtLink>
            </div>
        </div>

        <div class="mission">
            <p class="mission__desc">{{ t('project_success_message') }}
            </p>
            <h3 class="mission__title"> {{ t('mission_statement') }}</h3>
        </div>

        <section class="about">
            <div class="about__container">
                <h2 class="about__title title">{{ t('about_our_company') }}</h2>
                <div class="about__numbers">
                    <div class="about__numbers_item">
                        <p class="about__numbers_item-number">40+</p>
                        <p class="about__numbers_item-text">{{ t('projects_completed') }}</p>
                    </div>
                    <div class="about__numbers_item">
                        <p class="about__numbers_item-number">10+</p>
                        <p class="about__numbers_item-text">{{ t('contractors_in_operation') }}</p>
                    </div>
                    <div class="about__numbers_item">
                        <p class="about__numbers_item-number">3+</p>
                        <p class="about__numbers_item-text">{{ t('years_experience_contractors') }}</p>
                    </div>
                    <div class="about__numbers_item">
                        <p class="about__numbers_item-number">1.000+</p>
                        <p class="about__numbers_item-text">{{ t('satisfied_clients') }}</p>
                    </div>
                </div>

                <div class="about__desc">

                    <div class="about__desc_items">
                        <div class="about__desc_items-left">
                            <img src="/img/logo.svg" alt="логотип">
                            <h3 class="about__desc_items-title">{{ t('individual_approach') }}</h3>
                        </div>
                        <p class="about__desc_items-text">{{ t('individual_approach_description') }}</p>

                    </div>
                    <div class="about__desc_items">
                        <div class="about__desc_items-left">
                            <img src="/img/logo.svg" alt="логотип">
                            <h3 class="about__desc_items-title">{{ t('transparency_openness') }}</h3>
                        </div>
                        <p class="about__desc_items-text">{{ t('transparency_openness_description') }}</p>

                    </div>
                    <div class="about__desc_items">
                        <div class="about__desc_items-left">
                            <img src="/img/logo.svg" alt="логотип">
                            <h3 class="about__desc_items-title">{{ t('expertise_experience') }}</h3>
                        </div>
                        <p class="about__desc_items-text">{{ t('expertise_experience_description') }}</p>

                    </div>

                </div>
            </div>

            <div class="about__target">
                <NuxtImg src="/img/target.webp" alt="картинка блока наша цель" loading="lazy"
                    class="about__target_bg" />
                <div class="about__target_inner container">
                    <p class="about__target_text"> <span>{{ t('our_goal') }}</span> – {{ t('goal_description') }}</p>
                </div>
            </div>

        </section>

        <div class="hoteliers">
            <div class="hoteliers__top">
                <h2 class="hoteliers__title title">{{ t('Hoteliers') }}</h2>
                <NuxtLink to="/hoteliers" class="hoteliers__link">{{ t('view_all_hoteliers') }}</NuxtLink>
            </div>


            <hoteliers @openContacts="openContacts" />


        </div>
    </main>

    <footerMain :links="props.links" />

    <Transition name="modal">
        <modal v-if="hotelsStores.contactModal" @close-request="closeContacts" />
    </Transition>

</template>

<script setup>
import hoteliers from '~/components/hoteliers.vue';
import footerMain from '~/components/footerMain.vue';
import modal from '~/components/modal.vue';

const { t } = useI18n();

const props = defineProps({
    links: Array
})

const hotelsStores = useHotelsStore()
hotelsStores.loadHotels()


const openContacts = () => hotelsStores.contactModal = true

const closeContacts = () => hotelsStores.contactModal = false

const videoElement = ref(null);

const videoRef = ref(null);

onMounted(() => {
    if (videoRef.value) {
        const video = videoRef.value;

        // Используем Intersection Observer для ленивой загрузки видео
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.src = video.querySelector('source').src;
                    video.load();
                    observer.unobserve(video);
                }
            });
        });

        observer.observe(video);
    }
});

useSeoMeta({
    title: 'IXORA Consalt - Главная страница',
    ogTitle: 'IXORA Consalt - Главная страница',
    description: 'IXORA Consalt предлагает лучшие услуги по недвижимости. Узнайте больше о наших проектах и услугах.',
    ogDescription: 'IXORA Consalt предлагает лучшие услуги по недвижимости. Узнайте больше о наших проектах и услугах.',
    ogImage: 'https://ixora-consalt.com/img/main.turnkey.webp',
    ogUrl: 'https://ixora-consalt.com',
    twitterCard: 'summary_large_image',
});

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Главная страница IXORA Consalt",
                "description": "IXORA Consalt предлагает лучшие услуги по недвижимости. Узнайте больше о наших проектах и услугах.",
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
