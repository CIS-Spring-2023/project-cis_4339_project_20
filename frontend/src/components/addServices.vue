<script>
import { ref } from 'vue'
import { onMounted } from 'vue';
import { useServiceList } from "../store/services.js";
export default {
  
  setup() {
    const newService = ref("");
    const list = useServiceList();
// addService adds a new service to services list if the item is not an empty string 
function addService(item) {
      if (item.length === 0) {return}
      list.addService(item)
      newService.value = ""
    }
// get all services from db
    onMounted(() => {
      list.GetServices()
    });
    return {
      list,
      newService,
      addService
    }
  },
}
</script>

<!-- Referenced from https://blog.deepgram.com/build-a-todo-list-with-pinia-and-vue-3/ -->
<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
      Add Service
      </h1>
      <br>
    <h3 class="text-center"> Current List of Services: </h3>
      <div class="text-center">
        <!-- looping through services filtered by activeServices only -->
        <!-- Referenced from https://getbootstrap.com/docs/5.0/components/list-group/ -->
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="service in list.services" :key="service.id">
            {{ service.name }} - {{ service.active ? 'Active' : 'Inactive' }}
          </li>
        </ul>
      </div>
    <hr class="solid">
      <h3 class="text-center mt-4"> Enter a service to add it to the list.</h3>
        <form @submit.prevent="addService(newService)">
          <div class="form-group text-center">
            <input type="text" class="mb-2 form-control text-center" v-model="newService">
            <button class="btn btn-primary btn-block"> Add </button>
          </div>
        </form>
    </div>
  </div>
</template>