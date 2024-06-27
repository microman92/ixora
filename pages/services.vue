<template>
    <headerSecond />

    <main class="main-services">
        <section class="investment" id="buy">

            <div class="investment__left">
                <h2 class="investment__title services__title">{{ t('purchase.title') }}</h2>
                <p class="investment__description services__text">
                    {{ t('purchase.task') }}
                </p>
                <p class="investment__description services__text">{{ t('purchase.analytics_intro') }}</p>
                <ul class="investment__list">
                    <li class="investment__item services__text">{{ t('purchase.criteria') }}</li>
                    <li class="investment__item services__text">{{ t('purchase.risk_assessment') }}</li>
                    <li class="investment__item services__text">{{ t('purchase.liquidity_assessment') }}</li>
                </ul>

                <div class="investment__footer services__icons">
                    <img src="/img/investments.svg" alt="Иконка подбора" class="investment__icon">
                    <h3 class="investment__footer-text icon__title">{{ t('purchase.investment_selection') }}</h3>
                </div>
            </div>
            <div class="investment__image">
                <NuxtImg src="/img/investments-img.webp" alt="Инвестиции" class="investment__image-content"
                    loading="lazy" />
            </div>

        </section>

        <section class="sell" id="sell">
            <div class="sell__left">
                <NuxtImg src="/img/sell-img.webp" alt="Картинка блока Продажа" loading="lazy" />
            </div>

            <div class="sell__right">
                <h2 class="sell__right_title services__title">{{ t('sale.title') }}</h2>

                <p class="sell__right_text services__text">{{ t('sale.task') }}</p>
                <p class="sell__right_text services__text">{{ t('sale.result') }}</p>

                <div class="sell__right_footer services__icons">
                    <img src="/img/services-sell.svg" alt="Иконка подбора" class="investment__icon">
                    <h3 class="sell__footer_text icon__title">{{ t('sale.property_analytics') }}</h3>
                </div>

            </div>


        </section>

        <section class="turnkey" id="turnkey">

            <div class="turnkey__left">
                <h2 class="turnkey__title services__title">{{ t('turnkey.title') }}</h2>
                <p class="turnkey__description services__text">{{ t('turnkey.description') }} </p>
                <ul class="turnkey__list">
                    <li class="turnkey__item services__text"> <span>{{ t('turnkey.consulting_support_highlighted')
                            }}</span>
                        {{ t('turnkey.consulting_support_full_text') }}</li>
                    <li class="turnkey__item services__text">⁠ <span>{{ t('turnkey.business_concept_highlighted')
                            }}</span>
                        {{ t('turnkey.consulting_support_full_text') }}
                    </li>
                    <li class="turnkey__item services__text"> <span>{{ t('turnkey.hotel_design_highlighted') }}</span> -
                        {{ t('turnkey.hotel_design_full_text') }}
                    </li>
                    <li class="turnkey__item services__text"> <span>{{ t('turnkey.hotel_development') }}</span> </li>
                    <li class="turnkey__item services__text"> <span>{{ t('turnkey.uk_selection') }}</span> </li>
                </ul>
            </div>
            <div class="turnkey__image">
                <img src="/img/turnkey-img.webp" alt="Инвестиции" class="turnkey__image-content" loading="lazy">
            </div>

        </section>

    </main>

    <footerMain :links="links" />

</template>

<script setup>
import headerSecond from '~/components/headerSecond.vue';
import footerMain from '~/components/footerMain.vue';

const { t } = useI18n();

const props = defineProps({
    links: Array
})

useSeoMeta({
    title: 'Услуги - IXORA Consalt',
    description: 'Ознакомьтесь с нашими услугами: покупка, продажа, услуги под ключ. Мы предлагаем полный спектр услуг по недвижимости.',
    ogTitle: 'Услуги - IXORA Consalt',
    ogDescription: 'Ознакомьтесь с нашими услугами: покупка, продажа, услуги под ключ. Мы предлагаем полный спектр услуг по недвижимости.',
    ogImage: 'https://ixora-consalt.com/img/services-main.webp',
    ogUrl: 'https://ixora-consalt.com/services',
    twitterCard: 'summary_large_image',
});

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Услуги - IXORA Consalt",
                "description": "Ознакомьтесь с нашими услугами: покупка, продажа, услуги под ключ. Мы предлагаем полный спектр услуг по недвижимости.",
                "url": "https://ixora-consalt.com/services",
                "publisher": {
                    "@type": "Organization",
                    "name": "IXORA Consalt",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://ixora-consalt.com/img/logo.svg"
                    }
                },
                "mainEntity": {
                    "@type": "ItemList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Покупка недвижимости",
                            "url": "https://ixora-consalt.com/services#buy",
                            "description": "Покупка недвижимости с помощью IXORA Consalt. Мы предлагаем услуги по подбору инвестиций, оценке рисков и ликвидности."
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Продажа недвижимости",
                            "url": "https://ixora-consalt.com/services#sell",
                            "description": "Продажа недвижимости через IXORA Consalt. Мы предоставляем аналитические и маркетинговые услуги для успешной продажи."
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "Услуги под ключ",
                            "url": "https://ixora-consalt.com/services#turnkey",
                            "description": "Комплексные услуги под ключ от IXORA Consalt. Мы предлагаем консультативную поддержку, разработку бизнес-концепции, дизайн отеля и управление проектом."
                        }
                    ]
                }
            })
        }
    ],
});

</script>

<style lang="scss" scoped></style>