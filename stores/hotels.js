import { defineStore } from 'pinia'
import axios from 'axios'

export const useHotelsStore = defineStore('hotels', {
    state: () => ({
        hotels: [],
        hotelsById: [],
        pdfUrl: './files/hotel.pdf',
        contactModal: false
    }),
    actions: {
        async loadHotels() {
            try {
                const response = await axios.get('https://66ce880002d59ec9.mokky.dev/hotels')
                this.hotels = response.data
            } catch (error) {
                console.error('Failed to load hotels:', error)
            }
        },
        async loadHotelById(id) {
            try {
                if (this.hotels.length === 0) {
                    await this.loadHotels()
                }
                this.hotelsById = this.hotels.find(hotel => hotel.id == id)
            } catch (error) {
                console.error('Failed to load hotel by id:', error)
            }
        },
    }
})
