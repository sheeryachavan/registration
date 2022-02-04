import { createWebHistory, createRouter } from "vue-router";
import Register from "@/views/Register/Register.vue";
import Success from "@/views/Success/Success.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect:"register",
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
  },
  {
    path: "/*",
    name: "Not Found",
    component:  NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;