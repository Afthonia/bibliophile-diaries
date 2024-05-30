<template>
  <div class="flex flex-col md:flex-row">
    <aside
      class="max-w-sm bg-bida-third md:min-h-screen flex flex-col flex-1 shrink-0 md:w-sm overflow-y-auto overflow-x-auto"
    >
      <!-- <img src="" alt="Profile" class="h-40 w-40 ml-7 mt-8 rounded-full" /> -->
      <div class="m-7">
        <div class="font-bold">{{name}}</div>
        <div class="font-light">{{email}}</div>
        <div class="font-thin">{{createdAtFormat}}</div>
        <!-- <span>01.03.2018</span> -->
        <div class="my-11">
          <div class="flex flex-row gap-2 items-center">
            <span>About</span>
            <div class="group relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4"
                @click="isEditing = true"
              >
                <path
                  d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"
                />
              </svg>
              <div class="helper-box">Edit</div>
            </div>
          </div>
          <div class="text-sm">
            {{ about }}
          </div>
          <InfoModal :modalActive="isEditing" @closeModal="toggleModal">
            <input
              type="text"
              :value="bio"
              @input="(event) => (bio = event.target.value)"
            />
            <button type="submit" @click="handleBio">Save</button>
          </InfoModal>
        </div>
        <div class="flex flex-row md:flex-col">
          <span
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :class="{
              'border-b-2 md:border-b-0 md:border-l-2': menuItem.isActive,
              'border-transparent': !menuItem.isActive,
            }"
            class="profile-section"
            @click="selectMenuItem(index)"
          >
            {{ menuItem.text }}
          </span>
        </div>
      </div>
    </aside>
    <main
      class="flex flex-1 items-stretch flex-wrap overflow-y-auto p-5 max-w-full"
    >
      <div v-if="selectedSection !== null">
        <component :is="menuItems[selectedSection].component"></component>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BookshelfView from "../views/BookshelfView.vue";
import UserCommentsView from "../views/UserCommentsView.vue";
import UserPostsView from "./UserPostsView.vue";
import InfoModal from "../components/InfoModal.vue";
import updateBio from "../composables/user/updateBio";
import { format } from "date-fns/format";
//import getDashboard from "../composables/user/getDashboard.js";

// const dashboard = ref({});

// getDashboard().then((resp) => {
//   dashboard.value = resp;
//   console.log(dashboard.value.user_comments);
// });

const selectedSection = ref(null);
const isEditing = ref(false);
const bio = ref("");
const about = ref("write something...");

const name = ref('')
const email = ref('')
const createdAt = ref('')
const createdAtFormat = ref(null)

const user = JSON.parse(localStorage.getItem("user"))

if (user && user.token) {
  name.value = user.name
  email.value = user.email
  createdAt.value = user.created_at
  createdAtFormat.value = format(createdAt.value, 'yyyy-MM-dd') 
}
const savedBio = JSON.parse(localStorage.getItem("bio"));

if (savedBio) {
  console.log(savedBio._value)
  about.value = savedBio._value;
}

const menuItems = [
  // {
  //   text: `Bookshelf`,
  //   isActive: false,
  //   component: BookshelfView,
  // },
  {
    text: `Comments`,
    isActive: false,
    component: UserCommentsView,
  },
  { text: "Posts", isActive: false, component: UserPostsView },
];

const selectMenuItem = (index) => {
  selectedSection.value = index;
  console.log(selectedSection.value);
  menuItems.forEach((menuItem, i) => {
    menuItem.isActive = i === index;
  });
};

const toggleModal = () => {
  isEditing.value = !isEditing.value;
};

const handleBio = () => {
  const updated = updateBio(bio.value);

  if (updated) {
    about.value = bio;
    localStorage.setItem("bio", JSON.stringify(about.value));
    toggleModal();
  }
};
</script>
