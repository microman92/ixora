

export const useFormWork = defineStore('FormWork', {
    state: () => ({
        url: 'https://script.google.com/macros/s/AKfycbzcPY91tcBPam0p2qB4UzGW_1AX3BjOBLviCu9OY_6wz-WfNFizrACVYZFESJxQO7x5/exec'
    }),
    actions: {

        async formWork(items) {
            try {
                const response = await fetch(this.url,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                        },
                        body: items,
                    })
                    .then(response => console.log('Success!', response))
                    .catch(error => console.error('Error!', error.message))

                const result = await response.json();
                console.log(result);

            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
    }
})

