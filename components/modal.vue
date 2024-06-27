<template>
    <Transition name="modal">
        <div class="request" @click="emitCloseRequest">
            <div class="request__block" @click.stop>
                <div class="request__block_top">
                    <h2>{{ t('submit_request') }}</h2>
                    <img src="/img/close.svg" alt="Закрыть" @click="emitCloseRequest">
                </div>
                <client-only>
                    <submitform />
                </client-only>
            </div>
        </div>
    </Transition>
</template>

<script setup>

import submitform from './submitform.vue';

const emit = defineEmits(['close-request'])
const { t } = useI18n();


const emitCloseRequest = () => {
    emit('close-request')
}

</script>
