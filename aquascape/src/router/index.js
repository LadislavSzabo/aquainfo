import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Aquascaping from "../views/Aquascaping.vue";
import AquariumFishes from "../views/AquariumFishes.vue";
import ArticleList from "../views/ArticleList.vue";
import ArticlePage from "../views/ArticlePage.vue"; // Make sure this is the correct import

const routes = [
  { path: "/", component: Home },
  { path: "/aquascaping", component: Aquascaping },
  { path: "/aquarium-fishes", component: AquariumFishes },
  { path: "/article-list", component: ArticleList },
  { path: "/article/:id", component: ArticlePage, props: true }, // Use dynamic route here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
