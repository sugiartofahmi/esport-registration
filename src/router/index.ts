import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home/index.vue";
import About from "../views/about/index.vue";
import Team from "../views/team/index.vue";
import Signup from "../views/signup/index.vue";
import Signin from "../views/signin/index.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/team",
    component: Team,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/signin",
    component: Signin,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});