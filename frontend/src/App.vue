<script>
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API
import { useLoggedInUserStore } from "@/store/loggedInUser";
export default {
  name: 'App',
  data() {
    return {
      orgName: 'Dataplatform'
    }
  },
  setup() {
    const user = useLoggedInUserStore();
    return { user };
  },
  created() {
    axios.get(`${apiURL}/org`).then((res) => {
      this.orgName = res.data.name
    })
  }
}
</script>

<template>
  <main class="flex flex-row">
    <div id="_container" class="h-screen">
      <header class="w-full">
        <section class="text-center">
          <img class="m-auto" src="@\assets\DanPersona.svg" />
        </section>
        <nav class="mt-10">
          <ul class="flex flex-col gap-4 navbar-nav">
            <!------------------>
            <li v-if="!user.isLoggedIn" class="nav-item">
              <router-link to="/userlogin" class="nav-link active">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >login</span
                >
                Login
              </router-link>
            </li>
           <!-- Logged In -->
           <li class="nav-item" v-if="user.isLoggedIn">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarUserMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-fill"></i> Welcome, {{ user.name }}
            </a>
            <ul class="dropdown-menu" id="_container" aria-labelledby="navbarUserMenuLink">
              <li class="nav-item">
                <a href="" id="_container">
                  <span @click="store.logout()"><i class="bi bi-box-arrow-left"></i> Logout</span>
                </a>
              </li>
            </ul>
          </li>
            <!------------------>
            <li class="nav-item">
              <router-link to="/" class="nav-link active">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >dashboard</span
                >
                Dashboard
              </router-link>
            </li>
            <li v-if="user.isLoggedIn" class="nav-item">
              <router-link to="/intakeform" class="nav-link active">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >people</span
                >
                Client Intake Form
              </router-link>
            </li>
            <li v-if="user.isLoggedIn" class="nav-item">
              <router-link to="/eventform" class="nav-link active">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >event</span
                >
                Create Event
              </router-link>
            </li>
            <li v-if="user.isLoggedIn" class="nav-item">
              <router-link to="/findclient" class="nav-link active">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Client
              </router-link>
            </li>
            <li v-if="user.isLoggedIn" class="nav-item">
              <router-link to="/findevents" class="nav-link active">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Event
              </router-link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <div class="grow w-4/5">
      <section
        class="justify-end items-center h-24 flex"
        style="background: linear-gradient(250deg, #c8102e 70%, #efecec 50.6%)"
      >
        <h1 class="mr-20 text-3xl text-white">{{ this.orgName }}</h1>
      </section>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>
<style scoped>
#_container {
  background-color: #c8102e;
  color: white;
  padding: 18px;
}
</style>
