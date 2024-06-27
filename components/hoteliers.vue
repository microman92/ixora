<template>
    <div class="hoteliers__card container">
        <div class="hoteliers__card_left">
            <img src="/img/hoteliers.webp" alt="hotelier.photo.description" loading="lazy">

            <div class="hoteliers__card_left-desc">
                <p>{{ t('HoteliersName') }}</p>
                <span>{{ t('HoteliersChief') }}</span>
            </div>

        </div>
        <div class="hoteliers__card_right">
            <h3 class="hoteliers__card_title"> {{ t('HoteliersName') }} </h3>
            <h4 class="hoteliers__card_subtitle">{{ t('HoteliersChief') }}</h4>
            <p class="hoteliers__card_text">{{ t('resume') }}</p>
            <button class="hoteliers__card_btn" @click="openContact">{{ t('HoteliersContacts') }}</button>
        </div>

    </div>

</template>

<script setup>
const { t } = useI18n();


const emit = defineEmits(['openContacts'])

const openContact = () => {
    emit('openContacts')
}


</script>


<style lang="scss"></style>
