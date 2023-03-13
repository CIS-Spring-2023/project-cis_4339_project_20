import { defineStore } from 'pinia'

export const useServiceList = defineStore({
    id: 'list',
    state: () => ({
        services: [
            'Family Support',
            'Adult Education',
            'Youth Services Program',
            'Early Childhood Education',
            'Fun Stuff'
        ]
    }),
   
})