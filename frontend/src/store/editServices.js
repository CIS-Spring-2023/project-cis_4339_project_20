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

    actions: {
        editServiceid(id, newName) {
          const service = this.services[id];
          if (service) {
            service.name = newName;
          }
        },
        editService(name, newName) {
            const service = this.services.find((service) => service.name === name);
            if (service) {
              service.name = newName;
            }
          },
        },
    
      getters: {
        activeServices() {
          return this.services.filter(service => service.active);
        },
      },
    });