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
  <h1 class="title"> Current List of Services </h1>
  <div v-for="item in list.services" class="list">
      {{ item }}
  </div>
</template>

<style>

.title {
  text-align: center;
}

.list {
  text-align: center;
}

</style> 