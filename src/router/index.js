import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";  // Import HomePage
import SignUpPage from "../components/SignUp.vue";  // Import SignUp page

const routes = [
  { path: "/", component: HomePage },  // Home page
  { path: "/signup", component: SignUpPage },  // SignUp page
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
