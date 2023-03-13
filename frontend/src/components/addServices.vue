<script>
import { useServiceList } from "../store/services.js";

export default {
  
  setup() {
    const list = useServiceList()
    return{
      list
    }
  }
}
</script>


<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
    <h3 class="text-center"> Current List of Services </h3>
      <div v-for="item in list.services" class="text-center">
            {{ item }}
      </div>
    <hr class="solid">
      <h3 class="text-center mt-4"> Enter a service to add it to the list</h3>
        <form @submit.prevent="handleSubmitForm">
          <div class="form-group text-center">
            <input type="text" class="mb-2 form-control text-center">
            <button class="btn btn-primary btn-block"> Add </button>
          </div>
        </form>
    </div>
  </div>
</template>

<style>
</style> 