import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "IntroPage",
      component: () => import("../pages/IntroPage.vue"),
    },
    {
      path: "/:id",
      name: "Board",
      component: () => import("../components/TheBoard.vue"),
    },
  ],
});