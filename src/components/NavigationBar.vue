<template>
  <header class="md:sticky top-0 shadow-lg">
    <nav class="flex flex-col md:flex-row bg-bida-secondary py-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-7 h-7 ml-5 inline md:hidden"
        @click="handleClick"
      >
        <path
          fill-rule="evenodd"
          d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
          clip-rule="evenodd"
        />
      </svg>

      <div
        class="md:flex flex-col md:flex-row md:items-center justify-start"
        :class="{ 'block duration-300': isClicked, hidden: !isClicked }"
        @click="handleClick"
      >
        <div class="group relative">
          <RouterLink :to="{ name: 'home' }">
            <img
              src="../assets/app-icon.svg"
              alt="App Logo"
              class="w-10 h-10 mx-12 mt-3 md:mt-0"
            />
          </RouterLink>
          <span class="helper-box">Home</span>
        </div>
        <div class="flex flex-col md:flex-row gap-7 mx-10 ml-9">
          <div class="py-3 cursor-pointer group">
            <span
              class="nav-section border-b-bida-side-color-1 inline"
              :class="{
                'bg-bida-fourth':
                  router.currentRoute.value.name === 'categories',
              }"
              @click="toggleCategories"
            >
              Categories
            </span>
            <div
              class="block md:hidden md:absolute bg-bida-secondary md:shadow-lg flex-none flex-col rounded-lg group-hover:block"
            >
              <RouterLink
                :to="{ name: 'categories', params: { category: 'History' } }"
              >
                <span class="category-box">History</span>
              </RouterLink>
              <RouterLink
                :to="{ name: 'categories', params: { category: 'Fiction' } }"
              >
                <span class="category-box">Fiction</span>
              </RouterLink>
              <RouterLink
                :to="{ name: 'categories', params: { category: 'Cooking' } }"
              >
                <span class="category-box">Cooking</span>
              </RouterLink>
              <RouterLink
                :to="{ name: 'categories', params: { category: 'Science' } }"
              >
                <span class="category-box">Science</span>
              </RouterLink>
              <RouterLink
                :to="{ name: 'categories', params: { category: 'Self-Help' } }"
              >
                <span class="category-box">Self-Help</span>
              </RouterLink>
            </div>
          </div>
          <RouterLink :to="{ name: 'dictionary' }">
            <div class="py-3">
              <span
                class="nav-section border-b-bida-side-color-2"
                :class="{
                  'bg-bida-fourth':
                    router.currentRoute.value.name === 'dictionary',
                }"
              >
                Dictionary
              </span>
            </div>
          </RouterLink>
          <RouterLink :to="{ name: 'search' }">
            <div class="py-3">
              <span
                class="nav-section border-b-bida-side-color-3"
                :class="{
                  'bg-bida-fourth': router.currentRoute.value.name === 'search',
                }"
              >
                Search
              </span>
            </div>
          </RouterLink>
          <RouterLink :to="{ name: 'recommend' }">
            <div class="py-3">
              <span
                class="nav-section border-b-bida-side-color-4"
                :class="{
                  'bg-bida-fourth':
                    router.currentRoute.value.name === 'recommend',
                }"
              >
                What Should I Read?
              </span>
            </div>
          </RouterLink>
        </div>
      </div>

      <div
        class="md:flex flex-row items-center justify-end flex-1 absolute md:static right-1 top-5"
      >
        <div v-if="!authenticated" class="flex gap-3">
          <RouterLink :to="{ name: 'login' }" class="flex flex-1 justify-end">
            <div
              class="px-4 py-1.5 border-2 border-bida-side-color-4 rounded-md text-bida-side-color-4 hover:bg-bida-fourth hover:duration-200"
            >
              Login
            </div>
          </RouterLink>
          <RouterLink
            :to="{ name: 'signup' }"
            class="flex flex-initial justify-end"
          >
            <div
              class="px-4 py-1.5 border-2 border-bida-side-color-4 bg-bida-side-color-4 rounded-md text-bida-secondary hover:bg-bida-side-color-5 hover:border-bida-side-color-5 hover:duration-200"
            >
              Sign Up
            </div>
          </RouterLink>
        </div>
        <div v-else class="flex flex-row justify-end">
          <div class="md:relative">
            <img
              src="@/assets/profile.png"
              alt="profile"
              class="w-10 h-10 rounded-full cursor-pointer mr-7"
              @click="profileClick"
            />
            <div
              v-if="profileClicked"
              class="bg-bida-secondary md:shadow-md md:absolute mt-5 top-14 right-17 md:right-3 rounded-lg text-sm"
            >
              <RouterLink :to="{ name: 'profile' }">
                <span class="pro-box">My Profile</span>
              </RouterLink>
              <span class="pro-box" @click="toggleModal">Add A Review</span>
              <span class="pro-box" @click="logOut">Logout</span>
              <InfoModal :modalActive="modalActive" @closeModal="toggleModal">
                <div class="flex flex-col gap-4 p-7">
                  <div
                    class="flex flex-row gap-14 justify-center items-center mb-7"
                  >
                    <h1 class="text-xl font-bold inline">Add A Book Review</h1>
                    <button
                      type="submit"
                      @click="shareReview"
                      class="inline border-2 rounded-lg border-bida-primary py-2 px-3 text-bida-primary hover:bg-bida-fourth hover:duration-200"
                    >
                      Share
                    </button>
                  </div>
                  <input
                    v-model="book"
                    type="text"
                    placeholder="Book Title"
                    class="p-5 inline"
                  />
                  <input
                    v-model="vote"
                    type="number"
                    placeholder="Vote (over 10)"
                    min="0"
                    max="10"
                    class="p-5 inline"
                  />
                  <input
                    v-model="title"
                    type="text"
                    placeholder="Post Title"
                    class="p-5"
                  />
                  <input
                    v-model="content"
                    type="text"
                    placeholder="Content"
                    class="p-5"
                  />
                </div>
              </InfoModal>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";
import InfoModal from "./InfoModal.vue";
import createReview from "../composables/post/createReview";
import { logout } from "../composables/user/auth";

const isClicked = ref(false);
const modalActive = ref(null);

const book = ref(null);
const vote = ref(0);
const title = ref("");
const content = ref(null);

const profileClicked = ref(false);
const showCategories = ref(false);

const shareReview = async () => {
  const resp = createReview(title.value, content.value, book.value, vote.value);
  if (resp) {
    console.log("shared");
    toggleModal();
    router.go(0);
  }
};

const handleClick = () => {
  isClicked.value = !isClicked.value;
};

const profileClick = () => {
  profileClicked.value = !profileClicked.value;
};

const toggleCategories = () => {
  showCategories.value = !showCategories.value;
};

const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

const logOut = () => {
  logout();
  router.push("/");
  router.go(0);
};

defineProps({
  authenticated: {
    required: true,
    type: Boolean,
    default: false,
  },
});
</script>
