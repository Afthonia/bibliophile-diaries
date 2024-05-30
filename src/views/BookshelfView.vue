<template>
  <div class="flex flex-wrap" v-for="book in books" :key="book.id">
    <BookCard
      :id="book.id"
      :coverUrl="book.cover_url"
      :title="book.title"
      :author="book.authors"
    />
    <!-- <BookDetailsModal :modalActive="modalActive" /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import BookDetailsModal from "../components/BookDetailsModal.vue";
import BookCard from "../components/BookCard.vue";
import getBookshelf from "../composables/book/getBookshelf";
import getBookIDS from "../composables/book/getBookIDs";

const books = ref([]);
const ids = ref([]);

const user = JSON.parse(localStorage.getItem("user"));

if (user && user.token) {
  getBookIDS(user.id).then((idList) => {
    ids.value = idList;
    getBookshelf(user.id).then((resp) => {
      books.value = resp;
    });
  });
}

const modalActive = ref(false);

const toggleBookDetails = () => {
  modalActive.value = true;
};
</script>
