import { createWebHistory, createRouter } from "vue-router";
import Register from "@/views/Register/Register.vue";
import Success from "@/views/Success/Success.vue";
import NotFound from "@/views/NotFound/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "register",
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
    props: true
  },
  {
    path: "/notfound",
    name: "NotFound",
    components: {
      default: NotFound //Vue component
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/notfound'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;