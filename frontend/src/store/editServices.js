import { defineStore } from 'pinia'
import axios from 'axios'

const apiURL = import.meta.env.VITE_ROOT_API

export const useServiceList = defineStore({
    id: 'list',
    state: () => ({
        services: [],
        id: 0,
    }),
    // The state services array contains all current services in this Pinia store. 
    actions: {
      async GetServices() {
        const response = await axios.get(`${apiURL}/services`)
        this.services = response.data;
      },
    // The editService action performs the action of replacing a service in the services array with a new name.
    async editService(name, newName) {  
      const service = this.services.find(service => service.name === name);
      if (!service) {
          return;
      }
      const updatedService = { ...service, name: newName };
      const response = await axios.put(`${apiURL}/services/${name}`, updatedService);
      if (response.status === 200) {
          const index = this.services.indexOf(service);
          if (index !== -1) {
              this.services.splice(index, 1, updatedService);
          }
      }
  },  
},         
    // activeServices filters the services array to only return services considered 'active' 
      getters: {
        activeServices() {
          return this.services.filter(service => service.active);
        },
      },
    })