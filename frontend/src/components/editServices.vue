<template>
    <h1> test </h1>
    <div>
        <li v-for="item in event">
            {{ item }}
        </li>
    </div>
</template>

    
<script>

export default {

  data() {
    return {
      // removed unnecessary extra array to track services
      event: {
        services: ["test"],
      }
  }
}
}

</script>