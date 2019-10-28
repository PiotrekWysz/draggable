import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "start",
      component: () => import("./views/Draggable.vue"),
      //beforeEnter: ifAuthenticated
      beforeEnter: (to, from, next) => {
        next("/draggable");
        return;
      }
    },
    {
      path: "/draggable",
      name: "draggable",
      component: () => import("./views/Draggable.vue")
      //beforeEnter: ifAuthenticated
    }
  ]
});

export default router;
