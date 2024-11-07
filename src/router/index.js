import { createRouter, createWebHistory } from "vue-router";
import ArticlePreview from "../components/ArticlePreview.vue";
import Article from "../components/Article.vue";

const routes = [
  { path: "/", component: ArticlePreview },
  { path: "/article/:title", component: Article, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
