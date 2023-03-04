import { defineStore } from 'pinia'

//defining a store
export const useLoggedInUserStore = defineStore({
  // id is only required for devtools with the Pinia store
  id: 'loggedInUser',
  //central part of the store
  state: () => {
    return {
      name: "",
      isLoggedIn: false,
    }
  },
  // login 
  actions: {
    async login(username, password) {
      try {
        const response = await apiLogin(username, password);
        this.$patch({
          isLoggedIn: response.isAllowed,
          name: response.name,
        })
        this.$router.push("/");
      } catch(error) {
        console.log(error)
      }
    },
    logout() {
      this.patch({
        name: "",
        isLoggedIn: false
      });
    }
  }
});

// login function
function apiLogin(u, p) {
  if (u === "cis" && p === "student") return Promise.resolve({ isAllowed: true, name: "John Doe" });
  if (p === "student") return Promise.resolve({ isAllowed: false });
  return Promise.reject(new Error("invalid credentials"));
}
