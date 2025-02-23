import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Login from "./components/auth/Login.vue";
import Register from "./components/auth/Register.vue";
import Placements from "./pages/Placements.vue"

const routes = [
  { path: "/", redirect: "/dashboard" },
  { path: "/dashboard", component: Dashboard },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  {path: "/placements", component: Placements}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
