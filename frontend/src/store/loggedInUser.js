import { defineStore } from 'pinia'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API


//defining a store
export const useLoggedInUserStore = defineStore({
  // id is only required for devtools with the Pinia store
  id: 'loggedInUser',
  //central part of the store
  state: () => {
    return {
      users: [],
      name: "",
      isLoggedIn: false,
      role: "viewer",
    }
  },
  // login 
  actions: {
    async login(username, password, role) {
      try {
        const response = await apiLogin(username, password, role);
        this.$patch({
          isLoggedIn: response.isAllowed,
          name: response.name,
          role: response.role,
        });
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      this.patch({
        name: "",
        isLoggedIn: false,
        role: "viewer",
      });
    },
    async fetchUsername() {
      try {
        const data = await axios.get(`${apiURL}/clients`)
        this.users = data.data
        console.log("user here:", users)
      }
      catch (error) {
        console.log(error)
      }
    }
  }
});


// ATTEMPT at hashing password for validation
/* function validation() {
  username = ''
  password = ''
  axios.post(`${apiURL}/users`).then(()) => {
    this.username = this.username
    this.password = this.password
  }
} */

// login function based on roles
function apiLogin(u, p) {
  if (u === "cis" && p === "editor") return Promise.resolve({ isAllowed: true, name: "Editor", role: "editor" });
  if (p === "editor") return Promise.resolve({ isAllowed: false });
  if (u === "cis" && p === "viewer") return Promise.resolve({ isAllowed: true, name: "Viewer", role: "viewer" });
  if (p === "viewer") return Promise.resolve({ isAllowed: false });
  return Promise.reject(new Error("invalid credentials"));
}
