import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AquariumFishes from "../views/AquariumFishes.vue";
import ArticleList from "../views/ArticleList.vue";
import ArticlePage from "../views/ArticlePage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/aquarium-fishes", component: AquariumFishes },
  { path: "/article-list", component: ArticleList },
  { path: "/article/:id", component: ArticlePage, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
