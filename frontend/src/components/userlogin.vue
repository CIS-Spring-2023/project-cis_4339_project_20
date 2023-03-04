<template>

<h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"> Login Page </h1>

    <div class="container d-flex justify-content-center">
        <form @submit.prevent="store.login(username, password)" novalidate="true">
            <!-- User login input box -->
            <div class="form-group row mb-3">
                <label class="form-label" for=""></label>
                <input type="text" v-model="username" class="form-control" placeholder="Username" required>
            </div>
            <!-- Password input box -->
            <div class="form-group row mb-6">
                <label class="form-label" for=""></label>
                <input type="password" v-model="password" class="form-control" placeholder="Password" required>
            </div>
             <!-- Login button -->
            <div class="form-group row mb-2">
                <button type="submit" class="btn btn-danger btn-block">Log In</button>
            </div>     
        </form>
    </div>

</template>

<script>
import { useLoggedInUserStore } from "@/store/loggedInUser";

export default {
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  setup() {
    const store = useLoggedInUserStore()
    return {
      store
    }
  }
};
</script>