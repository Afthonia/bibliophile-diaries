import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryView from "../views/CategoryView.vue";
import DictionaryView from "../views/DictionaryView.vue";
import SearchView from "../views/SearchView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import PostDetailsView from "../views/PostDetailsView.vue";
import ProfileView from "../views/ProfileView.vue";
import RecommendationView from "../views/RecommendationView.vue";
import RateBooksView from "../views/RateBooksView.vue";
import RecommendedBooksView from "../views/RecommendedBooksView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/books/:category",
      name: "categories",
      component: CategoryView,
      props: true,
    },
    {
      path: "/dictionary",
      name: "dictionary",
      component: DictionaryView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/recommend",
      name: "recommend",
      component: RecommendationView,
    },
    {
      path: "/rate-books/:index",
      name: "rate-books",
      component: RateBooksView,
      props: true,
    },
    {
      path: "/recommendations:ratings",
      name: "recommendations",
      component: RecommendedBooksView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/post-details/:id",
      name: "post-details",
      component: PostDetailsView,
      props: true,
    },
  ],
});

export default router;
