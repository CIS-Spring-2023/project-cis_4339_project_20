<script>
import { ref } from 'vue'
import { useServiceList } from "../store/editServices.js";

export default {
  setup() {
    const newService = ref("");
    const list = useServiceList();
    const editServiceName = ref(""); 
    
// editService will try to find the 'name' of service & if active
// if found and active, prompt displays name change or if service not found
    function editService(name) {
      const service = list.services.find(service => service.name === name && service.active);
      if (service) {
        const newName = prompt('Enter a new service name:', service.name);
        if (newName && newName.length > 0) {
          service.name = newName;
        }
  } else {
    alert(`Service '${name}' not found or not active`);
  }
}

    return {
      list,
      newService,
      editService,
      editServiceName,
    }
    
  },

  computed: {
    activeServices() {
      return this.list.services.filter(service => service.active)
    },
    inactiveServices() {
      return this.list.services.filter(service => !service.active)
    }
  },
  methods: {
    activateService(id) {
      const service = this.list.services.find(service => service.id === id)
      service.active = true
    },
    deactivateService(id) {
      const service = this.list.services.find(service => service.id === id)
      service.active = false
    }
  }
}

</script>

<!-- Referenced from https://blog.deepgram.com/build-a-todo-list-with-pinia-and-vue-3/ -->
<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
      Edit Service
      </h1>
    <h3 class="text-center"> Current List of Services </h3>
      <!-- looping through services filtered by activeServices only -->
      <div v-for="item in list.activeServices" class="text-center">
        {{ item.name }} - Active
      </div>
    <hr class="solid">
      <h3 class="text-center mt-4"> Enter name of service to edit:</h3>
      <form @submit.prevent="() => editService(editServiceName)">
        <div class="form-group text-center">
          <input type="text" class="mb-2 form-control text-center" v-model="editServiceName">
          <button class="btn btn-primary btn-block">Edit</button>
        </div>
      </form>
      <hr class="solid">
      <!-- Adding deletion-->
      <div>
    <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
      Delete Service
      </h1>
    <ul>
      <li v-for="service in activeServices" :key="service.id">
        {{ service.name }}
        <button @click="deactivateService(service.id)">Deactivate</button>
      </li>
    </ul>
    <hr>
    <h2>Inactive Services</h2>
    <ul>
      <li v-for="service in inactiveServices" :key="service.id">
        {{ service.name }}
        <button @click="activateService(service.id)">Activate</button>
      </li>
    </ul>
  </div>
    </div>
  </div>

</template>




