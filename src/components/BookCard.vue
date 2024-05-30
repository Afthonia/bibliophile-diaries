<template>
  <div class="book-card" v-if="coverUrl !== ''">
    <img :src="coverUrl" :alt="title" class="w-60 h-80" />
    <div class="p-1 my-3">
      <div @click="toggleBook" v-show="isLoggedIn">
        <svg
          v-if="!isAdded"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>
      </div>
      <span class="block text-lg">{{ title }}</span>
      <!-- <div v-for="author in authors" :key="author">
                <span class="block text-sm">{{ author }}</span>
            </div> -->
      <span class="block text-sm">{{ authors }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import toggleBookshelf from "../composables/book/toggleBookshelf";

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  authors: {
    type: String,
    default: "",
  },
  coverUrl: {
    type: String,
    default: "",
  },
});

const isLoggedIn = JSON.parse(localStorage.getItem("user"));

const isAdded = ref(false);

const toggleBook = () => {
  
  toggleBookshelf(props.id).then((resp) => {
    console.log(resp);
  });
  //isAdded.value = !isAdded.value;
};
</script>
