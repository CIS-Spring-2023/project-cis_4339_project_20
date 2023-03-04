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
    }
  }
});

// login function based on roles
function apiLogin(u, p) {
  if (u === "cis" && p === "editor") return Promise.resolve({ isAllowed: true, name: "John Doe", role: "editor" });
  if (p === "editor") return Promise.resolve({ isAllowed: false });
  if (u === "cis" && p === "viewer") return Promise.resolve({ isAllowed: true, name: "John Doe", role: "viewer" });
  if (p === "viewer") return Promise.resolve({ isAllowed: false });
  return Promise.reject(new Error("invalid credentials"));
}
