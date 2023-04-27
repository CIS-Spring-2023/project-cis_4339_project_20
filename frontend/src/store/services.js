import { defineStore } from 'pinia'
import axios from 'axios'

const apiURL = import.meta.env.VITE_ROOT_API

export const useServiceList = defineStore({
    id: 'list',
    state: () => ({
        services: [], // Services list is initialized for pulling all services in database.
        id: 0,
    }),

    actions: {
        async GetServices() {
            const response = await axios.get(`${apiURL}/services`) 
            this.services = response.data
          },
        async addService(newService) {
            const response = await axios.post(`${apiURL}/services`, { //axios.post to get make a post request to the services backend.
                name: newService, // The new service to be added is assigned a name and the org and active field is defaulted.
                org: '1',
                active: true,
            })
            console.log(response.data)
            this.services.push(response.data)
        },
    },
    getters: {
        activeServices() { // Filters services that are active.
            return this.services.filter(service => service.active);
        },
    },
});