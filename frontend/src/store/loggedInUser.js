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
      user: { id: "", name: "" },
      name: "",
      isLoggedIn: false,
      role: "viewer",
    }
  },
  // login 
  actions: {
    async login(username, password) {
      console.log("clicked")

      const response = await axios.post(`${apiURL}/users`, {
        username: username, password: password
      });

      this.user.name = response.data.username;
      this.user.id = response.data._id

      if (response.status == 200) {
        console.log("logged in successfully");

        this.$router.push("/");
        return
      }
      console.log('Login failed');

    },
    logout() {
   this.user.name = ''
   this.user.id=''
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
<<<<<<< HEAD


=======
>>>>>>> 14ebd5a55234fa4e18e55464346545e29f2fe294
