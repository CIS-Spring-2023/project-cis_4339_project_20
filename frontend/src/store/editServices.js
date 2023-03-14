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
        NextId: 10,
    }),
    // The state services array contains all current services in this Pinia store. 

    actions: {
    // The editService action performs the action of replacing a service in the services array with a new name.
        editService(name, newName) {  
            const service = this.services.find((service) => service.name === name);
            if (service) {
              service.name = newName;
            }
          },
        },
        
    // activeServices filters the services array to only return services considered 'active' 
      getters: {
        activeServices() {
          return this.services.filter(service => service.active);
        },
      },
    });