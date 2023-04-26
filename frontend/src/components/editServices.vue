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
    <div class="col-md-6 border-end border-danger">
      <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">
      Edit Services
      </h1>
      <br>
    <h2 class="text-center"> Current List of Services: </h2>
      <!-- looping through services filtered by activeServices only -->
      <div v-for="item in list.activeServices" class="text-center">
        {{ item.name }} - Active
      </div>
    <hr class="solid">
      <h3 class="text-center mt-4"> Enter name of service to edit:</h3>
      <form @submit.prevent="() => editService(editServiceName.split(/[ ,]+/))">
        <div class="form-group text-center m-2">
          <input type="text" class="mb-2 form-control text-center" v-model="editServiceName">
          <button class="btn btn-primary btn-block">Edit</button>
        </div>
      </form> 
    </div>


    <!-- Adding soft deletion -->
    <div class="col-md-6 border-start border-danger">
    <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">
      Activate/Deactivate Services
      </h1>
      <br>
      <h2 class="text-center">Active Services:</h2>
      <div class="container col-md-7">
        <ul class="list-group">
          <li v-for="service in activeServices" :key="service.id" class="text-left list-group-item">
            {{ service.name }}
              <button @click="deactivateService(service.id)" class="btn btn-secondary btn-block float-right">Deactivate</button>
          </li>
        </ul>
      </div>
    <hr>
    <h2 class="text-center">Inactive Services:</h2>
    <div class="container col-md-7">
        <ul class="list-group">
          <li v-for="service in inactiveServices" :key="service.id" class="text-left list-group-item">
            {{ service.name }}
            <button @click="activateService(service.id)" class="btn btn-success btn-block float-right">Activate</button>
          </li>
        </ul>
    </div>
    </div>
  </div>
</template>
<!-- CSS help referenced from https://getbootstrap.com/docs/4.0/components/list-group/ -->




