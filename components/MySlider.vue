<template>

    <Transition name="modal">
        <div class="modal" v-if="modalOpen" @click="emitCloseModal">

            <div class="modal__block" @click.stop>

                <Swiper :modules="[SwiperEffectFade, SwiperNavigation]" space-between="100" :slides-per-view="1"
                    :loop="true" :speed="1000" navigation :navigation="{
                        nextEl: '.swiper-button-next',
                        prevEl: 'swiper-button-prev'
                    }" class="header__swiper">
                    <SwiperSlide class="slide" v-for="photo in photos" :key="photo.id">
                        <NuxtImg class="slide__img" :src="photo.url" :alt="photo.alt" loading="lazy"/>
                    </SwiperSlide>

                </Swiper>
                <button class="close-button" @click="emitCloseModal"><img src="/img/close.svg" alt="закрыть"></button>
            </div>

        </div>

    </Transition>

</template>

<script setup>


const props = defineProps({
    links: Array,
    photos: Array,
    modalOpen: Boolean
})

const emit = defineEmits(['close-modal'])

const emitCloseModal = () => {
    emit('close-modal')
}

</script>


<style lang="scss">
.modal {
    background: rgba(0, 0, 0, 0.7);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal__block {
    width: 70%;
    height: 70%;
    position: relative;
}

@media (max-width:1200px) {
    .modal__block {
        width: 100%;
    }

    .close-button {
        top: -55px;
    }
}

.swiper {
    width: 100%;
    height: 100%;
    padding: 0 90px;

    &-slide {
        width: 100%;
    }
}

.close-button {
    position: absolute;
    top: -35px;
    right: 35px;
    z-index: 20;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    transition: 0.3s ease-in-out;
    cursor: pointer;
}

.slide__img {
    width: 100%;
    height: 100%;
    border-radius: 20px
}

.swiper-button-next,
.swiper-button-prev {
    color: white;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    background: rgba(0, 0, 0, 0.7);
}

.swiper-button-next::after,
.swiper-button-prev::after {
    font-size: 30px;

}

@media (max-width:992px) {

    .swiper{
        padding: 0 20px;
    }

    .close-button {
        top: 10px;
        right: 30px;
        width: 40px;
        height: 40px;
    }
    .close-button img {
        width: 40px;
    }
    .swiper-button-next,
.swiper-button-prev {
    width: 40px;
        height: 40px;

}
.swiper-button-next::after,
.swiper-button-prev::after {

    font-size: 20px;
}

}

@media (max-width:768px) {
    .modal__block {
        height: 50%;
    }
}

@media (max-width:576px) {

    .swiper{
        padding: 0 0px;
    }

    .close-button {
        width: 30px;
        height: 30px;
    }
    .close-button img {
        width: 30px;
    }
    .swiper-button-next,
.swiper-button-prev {
    display: none;

}
.swiper-button-next::after,
.swiper-button-prev::after {

    font-size: 20px;
}

.modal__block {
    height: 40%;
    }


}


</style>