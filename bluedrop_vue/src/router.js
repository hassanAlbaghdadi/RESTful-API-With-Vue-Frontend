import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Player from "./views/Player.vue";
import AddPlayer from "./views/AddPlayer.vue";
import RemovePlayer from "./views/DeletePlayer.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/player/:id",
      name: "player",
      component: Player
    },
    {
      path: "/addplayer",
      name: "addplayer",
      component: AddPlayer
    },
    {
      path: "/deleteplayer/:id",
      name: "deleteplayer",
      component: RemovePlayer
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
