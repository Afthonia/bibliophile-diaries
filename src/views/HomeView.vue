<template>
  <!-- <header>
    <div class="overflow-x-auto">
      <div class="flex flex-row" v-for="book in bestSellers " :key="bestSellers.indexOf(book)">
        <BookCard :title="book.title" :coverUrl="book.cover" :authors="book.authors" />
      </div>
    </div>
  </header> -->
  <main class="flex flex-col items-stretch overflow-x-auto">
    <div v-for="post in posts" :key="post.id">
      <RouterLink :to="{ name: 'post-details', params: { id: post.id }, }">
        <PostCard :isDetailed="false" :title="post.title" :content="post.content" />
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
//import getBestSellers from '../composables/books/getBestSellers'
import getPosts from '../composables/get/getPosts';
import PostCard from '../components/PostCard.vue'

// const { bestSellers, loadBestsellers, err } = getBestSellers()

// loadBestsellers()

// console.log(bestSellers.value)

// if (error.value !== null) {
//   console.log(error.value)
// }

const { posts, load, error } = getPosts()

load()
</script>
