<script>
import { ref } from 'vue'
import { useServiceList } from "../store/services.js";

export default {
  
  setup() {

    const newService = ref("");
    const list = useServiceList();
    
    function addService(item) {
      if (item.length === 0) {return};
      list.addService(item);
      newService.value = "";
    }

    return {
      list,
      newService,
      addService
    };
  }
}
</script>

<!-- Referenced from https://blog.deepgram.com/build-a-todo-list-with-pinia-and-vue-3/ -->
<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
    <h3 class="text-center"> Current List of Services </h3>
      <div v-for="item in list.services" class="text-center">
            {{ item.newService }}
      </div>
    <hr class="solid">
      <h3 class="text-center mt-4"> Enter a service to add it to the list</h3>
        <form @submit.prevent="addService(newService)">
          <div class="form-group text-center">
            <input type="text" class="mb-2 form-control text-center" v-model="newService">
            <button class="btn btn-primary btn-block"> Add </button>
          </div>
        </form>
    </div>
  </div>
</template>

<style>
</style> 