// plugins/uuid.client.ts
import { v4 as uuidv4 } from 'uuid';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            uuid: uuidv4
        }
    }
});
