<template>
    <footer class="footer">
        <div class="footer__left">
            <div class="footer__contacts">
                <h2 class="footer__contacts_title">{{ t('contacts') }}</h2>
                <div class="footer__contacts_inner">
                    <div class="footer__contact_items">
                        <a href="tel:+73784959266" class="footer__contacts_contact">+7 378 495-92-66</a>
                        <a href="mailto:info@ixora-consalt.com"
                            class="footer__contacts_contact">info@ixora-consalt.com</a>
                    </div>
                    <client-only>
                        <submitform />
                    </client-only>
                </div>
            </div>

            <div class="footer__links">
                <nuxt-link to="/"> <img src="/img/footer_logo.svg" alt="Логотип подвала сайта"></nuxt-link>

                <ul class="footer__list">
                    <li v-for="(link, i) in props.links" :key="i">
                        <NuxtLink :to="link.url" class="footer__list_link">{{ $t(link.name) }} </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer__right">
            <NuxtImg src="/img/footer-img.webp" alt="Картинка в подвале страницы" loading="lazy" />
        </div>
    </footer>
</template>

<script setup>
import submitform from './submitform.vue';

const { t } = useI18n();
const props = defineProps({ links: Array })



</script>
