<template>
    <footer class="footerSecond">
        <nuxt-link to="/"> <img src="/img/footer_logo.svg" alt="Логотип футера" loading="lazy"> </nuxt-link>

        <ul class="footer__list">
            <li v-for="(link, i) in props.links" :key="i">
                <NuxtLink :to="link.url" class="footer__list_link">{{ $t(link.name) }} </NuxtLink>
            </li>
        </ul>

        <a href="tel:+79651234567" class="footer__tel footer__list_link">+7 965 123-45-67</a>

        <p class="footerSecond__text footer__list_link">va-palm.com | Copyright 2024. All Rigths Reserved </p>

    </footer>
</template>

<script setup>


const props = defineProps({ links: Array })

</script>


<style lang="scss">
.footerSecond__text {
    line-height: 133%;
    text-align: right;
    font-size: 14px;
}

.footerSecond {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 50px;
    border-top: 1px solid #a0a0a0;
}

@media (max-width: 1440px) {
    .footerSecond {
        padding: 30px 15px;
    }
}

@media (max-width: 1200px) {
    .footerSecond {
        flex-direction: column;
        gap: 20px;
    }
}

</style>
