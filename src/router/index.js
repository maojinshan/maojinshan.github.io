import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router);

function getAbsolutePath() {
  let path = location.pathname;
  return path.substring(0, path.lastIndexOf("/") + 1);
}

export default new Router({
  mode: "history",
  base: getAbsolutePath(),
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});
