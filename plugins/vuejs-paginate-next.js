import { defineNuxtPlugin } from '#app';
import Paginate from 'vuejs-paginate-next';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Paginate', Paginate);
});