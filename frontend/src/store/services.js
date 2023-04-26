import { defineStore } from 'pinia'
import axios from 'axios'

const apiURL = import.meta.env.VITE_ROOT_API

export const useServiceList = defineStore({
    id: 'list',
    state: () => ({
        services: [],
        id: 0,
    }),

    actions: {
        async fetchServices() {
            const response = await axios.get(`${apiURL}/services`) 
            this.services = response.data;
          },
        async addService(newService) {
            const response = await axios.post(`${apiURL}/services`, {
                name: newService,
                active: true,
                id: this.id++,
            })
            this.services.push(response.data);
        },
    },
    //getters: {
        //activeServices() {
            //return this.services.filter(service => service.active);
        //},
    //},
});
