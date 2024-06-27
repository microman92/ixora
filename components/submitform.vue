<template>

    <form class="footer__form" @submit.prevent="submitForm" name="submit-to-google-sheet">
        <transition name="form-fade">
            <span class="form-succes" v-show="formSubmited">{{ t('submission_success') }}</span>
        </transition>
        <label>
            <input type="text" :placeholder="t('name')" v-model="form.name" name="Имя">
            <transition name="form-fade">
                <span class="form-errors" v-if="errors.name">{{ errors.name }}</span>
            </transition>
        </label>
        <label>
            <input type="text" :placeholder="t('phone')" v-model="form.tel" name="Телефон" v-mask="'# (###) ###-##-##'">
            <transition name="form-fade">
                <span class="form-errors" v-show="errors.tel">{{ errors.tel }}</span>
            </transition>
        </label>
        <button class="footer__form_btn">{{ t('navBtn') }}</button>
    </form>


</template>

<script setup>
const { t } = useI18n();
const props = defineProps({ links: Array })
const formStores = useFormWork()

const form = ref({ name: '', tel: '' })
const errors = ref({ name: '', tel: '', });
const formSubmited = ref(false)



function validateName() {
    if (!form.value.name) {
        errors.value.name = t('name_required');
    } else {
        errors.value.name = '';
    }
}

function validateTel() {
    if (!form.value.tel) {
        errors.value.tel = t('phone_required');
    } else if (form.value.tel.length < 10) {
        errors.value.tel = t('phone_minimum_digits');
    } else {
        errors.value.tel = '';
    }
}


const submitForm = async () => {
    validateName();
    validateTel();
    form.value.name = form.value.tel = ''

    if (!errors.value.name && !errors.value.tel) {
        const formElement = document.forms['submit-to-google-sheet'];
        const data = new FormData(formElement);
        console.log(data.entries());
        const items = new URLSearchParams();

        for (const [key, value] of data.entries()) {
            items.append(key, value);
        }

        try {
            const response = await fetch(formStores.url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body: items,
                })
            if (response.ok) {
                formSubmited.value = true;
                setTimeout(() => {
                    formSubmited.value = false;
                }, 2000);
            }

        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

}

</script>
