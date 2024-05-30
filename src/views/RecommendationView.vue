<template>
  <div v-if="err">
    <span>Error getting categories</span>
  </div>
  <div v-else>
    <div v-for="(category, i) in categories" :key="category">
      <span @click="choose(i)">[{{ i + 1 }}] {{ category }}</span>
    </div>
    <p @click="choose(19)">[20] All Genres</p>

    <div v-show="isChosen">
      <span class="block">{{ selectedGenre+1 }}</span>
      <RouterLink
        :to="{ name: 'rate-books', params: { index: selectedGenre } }"
      >
        <button>Next</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import getCategories from "../composables/book/getCategories";

const isChosen = ref(false);
const selectedGenre = ref(0);

const { categories, load, err } = getCategories();
load();

const choose = (index) => {
  selectedGenre.value = index;
  if (selectedGenre.value < 20) {
    isChosen.value = true;
    console.log(index);
  }
};
</script>
