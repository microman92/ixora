<template>
    <headerSecond />
    <main class="main-hoteliers">
        <div class="info-block">
            <p class="info-block__text">{{ t('expert_text') }}</p>
        </div>

        <hoteliers @openContacts="HoteliersOpenContacts" />
    </main>

    <modal v-show="hotelsStores.contactModal" @close-request="close" />
    <footerSecond :links="links" />
</template>

<script setup>
import modal from '~/components/modal.vue';
import headerSecond from '~/components/headerSecond.vue';
import footerSecond from '~/components/footerSecond.vue';
import hoteliers from '~/components/hoteliers.vue';
const hotelsStores = useHotelsStore()

const { t } = useI18n();
const props = defineProps({
    links: Array
})

const HoteliersOpenContacts = () => hotelsStores.contactModal = true

// Установка мета-тегов для страницы списка отелей
useSeoMeta({
    title: 'Наши Отельеры - IXORA Consalt',
    description: 'Откройте для себя наших партнеров и отельеров, работающих с IXORA Consalt. Узнайте больше о наших услугах и проектах.',
    ogTitle: 'Наши Отельеры - IXORA Consalt',
    ogDescription: 'Откройте для себя наших партнеров и отельеров, работающих с IXORA Consalt. Узнайте больше о наших услугах и проектах.',
    ogImage: 'https://ixora-consalt.com/img/hoteliers-main.webp', 
    ogUrl: 'https://ixora-consalt.com/hoteliers',
    twitterCard: 'summary_large_image',
});

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CollectionPage", 
                "name": "Наши Отельеры - IXORA Consalt",
                "description": "Откройте для себя наших партнеров и отельеров, работающих с IXORA Consalt. Узнайте больше о наших услугах и проектах.",
                "url": "https://ixora-consalt.com/hoteliers",
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
});


</script>

<style lang="scss">
.main-hoteliers {
    position: relative;
    padding-top: 163px;
    padding-bottom: 110px;
}



.info-block {
    max-width: 959px;
    width: 100%;
    background: rgba(16, 16, 16, 0.8);
    position: absolute;
    top: -53px;
    left: 50%;
    transform: translate(-50%);

    &::after {
        content: '';
        display: block;
        width: 1025px;
        height: 175px;
        border-radius: 15px;
        filter: blur(2px);
        background: #777;
        opacity: 0.2;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -1;
        transform: translate(-50%, -50%);
    }

    &__text {
        padding: 22px 50px;
        border: 1px solid #c1c1c1;
        border-radius: 10px;
        box-shadow: 0 0px 0px 17px rgba(16, 16, 16, 0.8);
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 26px;
        line-height: 115%;
        text-align: center;
        color: #c1c1c1;
        background: rgba(16, 16, 16, 0.8);
    }


}

@media (max-width: 1200px) {
    .info-block {
        max-width: 750px;

        &::after {
            width: 815px;
            height: 165px;
        }
    }

    .info-block__text {
        font-size: 22px;
    }
}

@media (max-width: 992px) {
    .info-block {
        max-width: 580px;

        &::after {
            width: 640px;
            height: 160px;
        }
    }

    .info-block__text {
        font-size: 18px;
        padding: 16px 50px;
    }
}

@media (max-width: 768px) {
    .info-block {
        max-width: 450px;

        &::after {
            width: 510px;
            height: 155px;
        }
    }

    .info-block__text {
        padding: 16px 30px;
    }
}

@media (max-width: 575px) {
    .info-block {
        max-width: 355px;

        &::after {
            width: 375px;
            height: 125px;
        }
    }

    .info-block__text {
        box-shadow: 0 0px 0px 10px rgba(16, 16, 16, 0.8);
        padding: 13px;
        font-size: 16px;
    }

    .main-hoteliers {
        padding-top: 100px;
        padding-bottom: 100px;
    }
}
</style>
