<template>
  <div v-if="!err">
    <div v-for="book in books" :key="book.id">
      <div>
        <BookCard
          :title="book.title"
          :authors="book.author"
          :coverUrl="book.coverUrl"
        />
        <input type="number" min="1" max="5" v-model="rate" />
        <button type="submit" @click="handleRate(book.title)">Rate</button>
      </div>
    </div>

    <RouterLink :to="goToRoute()">
      <button @click="printRatings">Next</button>
    </RouterLink>
  </div>
  <span v-else>Error loading the books</span>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import getRatedBooks from "../composables/book/getRatedBooks";
import BookCard from "../components/BookCard.vue";

const ratings = ref({});
const rate = ref(null);

const route = useRoute();

const categoryID = route.params.index;

const { books, load, err } = getRatedBooks();

load(categoryID);

const goToRoute = () => {
  return {
    name: "recommendations",
    params: { ratings: JSON.stringify(ratings.value) },
  };
};

const handleRate = (title) => {
  ratings.value[title] = rate.value;
  rate.value = null;
};

const printRatings = () => {
  console.log(ratings.value);
};
</script>
