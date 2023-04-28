<script>
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API
import { useLoggedInUserStore } from "@/store/loggedInUser";
export default {
  name: 'App',
  data() {
    return {
      orgName: 'Community Health Workers',
      email: '',
      password: '',
      error: ''
    }
  },
  setup() {
    const store = useLoggedInUserStore();
    return { store };
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
    <div style="background-color: #c8102e;" class="h-screen">
      <header class="w-full">
        <section class="text-center">
          <img class="m-auto" src="@\assets\DanPersona.svg" />
        </section>
        <nav class="mt-10 w-full" id="_container">
          <ul class="flex flex-col gap-4 navbar-nav">
            <!--Login tab-->
           
           <!-- Logged In -->
           <li class="nav-item" >
            <a
              class="nav-link "
              href="#"
              id="navbarUserMenuLink"
              role="button"
           
              aria-expanded="false"
            >
              <i class="bi bi-person-fill"></i> Welcome, {{ user?.name }}
            </a>
            
        
          </li>
          
          
            <!--- Dashboard --->
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
            <!--- Client Intake Form --->
            <li v-if="store.user.name == 'editor'" class="nav-item">
              <router-link to="/intakeform" class="nav-link active">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >people</span
                >
                Client Intake Form
              </router-link>
            </li>
            <!--- Create Event --->
            <li v-if="store.user.name == 'editor'" class="nav-item">
              <router-link to="/eventform" class="nav-link active">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >event</span
                >
                Create Event
              </router-link>
            </li>
            <!--- Find Client --->
            <li v-if="store.user.name == 'editor' || store.user.name == 'viewer'" class="nav-item">
              <router-link to="/findclient" class="nav-link active">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Client
              </router-link>
            </li>
            <!--- Find Event --->
            <li v-if="store.user.name == 'editor' || store.user.name == 'viewer'" class="nav-item">
              <router-link to="/findevents" class="nav-link active">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Event
              </router-link>
            </li>
            <!--Add Services tab-->
            <li v-if="store.user.name == 'editor'" class="nav-item">
              <router-link to="/addServices" class="nav-link active">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >design_services</span
                >
                Add Services
              </router-link>
            </li>
            <!--Edit Services tab-->
            <li v-if="store.user.name == 'editor'" class="nav-item">
              <router-link to="/editServices" class="nav-link active">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >design_services</span
                >
                Edit Services
              </router-link>
            </li>
            <li class="nav-item" v-if="store.user.name!=''">
                <a href="" id="_container" >
                  <span @click="store.logout()"><i class="bi bi-box-arrow-left"></i> Log out</span>
                </a>
              </li>
              <li class="nav-item" v-if="store.user.name==''">
              <router-link to="/userLogin" class="nav-link active">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >login</span
                >
                Log in
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
