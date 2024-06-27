// middleware/lazy-loading.js
import { defineAsyncComponent } from 'vue';

export default function (to, from, next) {
    const pageName = to.name;

    if (pageName) {
        const component = defineAsyncComponent(() => import(`~/pages/${pageName}.vue`));
        to.matched[0].components.default = component;
    }

    next();
}
