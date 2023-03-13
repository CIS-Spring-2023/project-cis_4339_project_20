import { defineStore } from 'pinia'

export const useServiceList = defineStore({
    id: 'list',
    state: () => ({
        services: [
            {newService: 'Family Support', id: 0},
            {newService: 'Adult Education', id: 0},
            {newService: 'Youth Services Program', id: 0},
            {newService: 'Early  Childhood Education', id: 0},
            {newService: 'Random Stuff', id: 0},
        ],
        id: 10,
    }),
    
    actions: {
        addService(newService) {
            this.services.push({newService, id: this.id++});
        },
    },
   
})