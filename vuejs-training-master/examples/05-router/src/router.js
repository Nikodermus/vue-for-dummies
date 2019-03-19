import Vue from 'vue'
import Router from 'vue-router'
import homeRoutes from "@/home/routes";
import aboutRoutes from "@/about/routes";

Vue.use(Router);

export default new Router({
  routes: homeRoutes.concat(aboutRoutes)
});
