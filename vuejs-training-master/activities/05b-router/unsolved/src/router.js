import Vue from 'vue'
import Router from 'vue-router'
import loginRoutes from "./login/routes";
import searchRoutes from "./search/routes";


Vue.use(Router);

export default new Router({
  routes: loginRoutes.concat(searchRoutes)
});
