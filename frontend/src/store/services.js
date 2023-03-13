import { defineStore } from 'pinia'

export const useServiceList = defineStore({
    id: 'list',
    state: () => ({
        services: [
            { name: 'Family Support', active: true, id: 0 },
            { name: 'Adult Education', active: false, id: 1 },
            { name: 'Youth Services Program', active: true, id: 2 },
            { name: 'Early Childhood Education', active: false, id: 3 },
            { name: 'Random Stuff', active: true, id: 4 },
        ],
        id: 10,
    }),

    actions: {
        addService(newService) {
            this.services.push({ name: newService, active: true, id: this.id++ });
        },
    },

    getters: {
        activeServices() {
            return this.services.filter(service => service.active);
        },
    },
});