<template>
  <div>
    <div class="mt-11 p-3 flex flex-row gap-2 justify-center flex-wrap">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 cursor-pointer"
          @click="toggleModal"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
            clip-rule="evenodd"
          />
        </svg>
        <InfoModal :modalActive="modalActive" @closeModal="toggleModal">
          You can search for the book(s) you want to find by typing the book
          title or author name.
        </InfoModal>
      </div>
      <input
        v-model="searchValue"
        type="text"
        placeholder="Search For Books With Title or Author..."
        class="rounded-md max-w-xl p-5 w-full flex-initial"
        :class="{ 'border-2 border-red-700 shadow-sm shadow-red-700': isEmpty }"
      />
      <button
        class="px-3 w-40 h-16 rounded-md bg-bida-primary hover:bg-bida-third flex-initial"
        @click="searchHandle"
      >
        Find
      </button>
      <!-- <select
        v-model="searchType"
        class="px-3 rounded-md flex-initial h-16"
        :class="{
          'border-2 border-red-700 shadow-sm shadow-red-700': isInvalid,
        }"
      >
        <option value="title">Book Title</option>
        <option value="author">Author</option>
      </select> -->
    </div>
    <div v-if="books.length !== 0" class="flex flex-row flex-wrap">
      <div v-for="book in books" :key="books.indexOf(book)">
        <BookCard
          :coverUrl="book.coverUrl"
          :title="book.title"
          :author="book.authors"
          :publisher="book.publisher"
        />
      </div>
    </div>
    <div v-else>
      <!-- <div v-if="error">
        <span class="flex flex-col items-center mt-7 font-bold text-xl"
          >The result could not found :(</span
        >
      </div> -->
      <div v-if="isLoading">
        <span class="flex flex-col items-center mt-7 font-bold text-xl"
          >Loading...</span
        >
      </div>
      <div v-else class="flex flex-col items-center mt-7 font-bold text-xl">
        <span>There Is No Book.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import searchBooks from "../composables/book/searchBooks";
import BookCard from "../components/BookCard.vue";
import InfoModal from "../components/InfoModal.vue";

const modalActive = ref(null);

const searchValue = ref("");
const isEmpty = ref(null);
const isInvalid = ref(null);
const isLoading = ref(null);

const { books, load, err } = searchBooks();

const searchHandle = () => {
  console.log(isLoading.value);
  if (searchValue.value.length !== 0) {
    isEmpty.value = false;
    isInvalid.value = false;
    // switch (searchType.value) {
    //   case "title":
    //     console.log(searchType.value);
    //     load(searchValue.value, searchType.value);
    //     break;

    //   case "author":
    //     console.log(searchType.value);
    //     load(searchValue.value, searchType.value);
    //     break;

    //   default:
    //     isInvalid.value = true;
    //     break;
    // }

    console.log(searchValue.value);
    load(searchValue.value);
    console.log(books.value.length);
  } else {
    isEmpty.value = true;
    isInvalid.value = true;
  }
};

const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

// watch(books, () => {
//   books.value.length === 0
//     ? (isLoading.value = true)
//     : (isLoading.value = true);
//   console.log(isLoading.value);
// });
</script>
