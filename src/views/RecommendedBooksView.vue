<template>
  <div v-if="!err">
    <div v-for="book in books" :key="book.id">
      <div>
        <BookCard
          :title="book.title"
          :authors="book.authors"
          :coverUrl="book.coverUrl"
        />
        <span>{{ index++ }}</span>
      </div>
    </div>
  </div>
  <span v-else>Error loading recommendations</span>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import getRecommendations from "../composables/book/getRecommendations";
import BookCard from "../components/BookCard.vue";

const index = ref(1);

const route = useRoute();

const ratings = route.params.ratings;
console.log(ratings);

const { recBooks, load, err } = getRecommendations();
var books = ref([]);
load(ratings).then((val) => {
  books.value = val.value;
});
</script>
