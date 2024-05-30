<template>
  <main class="flex flex-col items-stretch overflow-x-auto">
    <div v-for="post in posts" :key="post.id">
      <PostCard
        :isDetailed="false"
        :id="post.id"
        :author="post.author"
        :authorID="post.author_id"
        :createdAt="post.created_at"
        :title="post.title"
        :content="post.content"
        :bookTitle="post.book_title"
        :vote="post.vote"
        :isLiked="post.is_liked"
        :likeCount="post.like_count"
      />
    </div>
  </main>
</template>

<script setup>
import getPosts from "../composables/post/getPosts";
import PostCard from "../components/PostCard.vue";
import { ref } from "vue";

const posts = ref([])

getPosts(0).then((resp) => {
  posts.value = resp
});

</script>
