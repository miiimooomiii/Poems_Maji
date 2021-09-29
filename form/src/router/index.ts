import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  // viteの環境変数 => (vite.config.tsのbase)
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
