import { defineStore } from 'pinia'

export const useServiceList = defineStore({
    id: 'list',
    state: () => ({
        services: [
            { name: 'Family Support', active: true, id: 0 },
            { name: 'Adult Education', active: false, id: 1 },
            { name: 'Youth Services Program', active: true, id: 2 },
            { name: 'Early Childhood Education', active: false, id: 3 },
            { name: 'Test 1', active: true, id: 4 },
        ],
        id: 10,
    }),
    // The state services array contains all current services in this Pinia store. 
    // There are some hard coded in for testing purposes but services state should be dynamic.

    actions: {
        addService(newService) {
            this.services.push({ name: newService, active: true, id: this.id++ });
        },
    },
    // The addService action performs the action of adding a service to the services array.

    getters: {
        activeServices() {
            return this.services.filter(service => service.active);
        },
    },
});