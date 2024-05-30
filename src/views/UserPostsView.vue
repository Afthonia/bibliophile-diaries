<template>
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
</template>

<script setup>
import { ref } from "vue";
import PostCard from "../components/PostCard.vue";
import getPosts from "../composables/post/getPosts";

const posts = ref([]);

const user = JSON.parse(localStorage.getItem("user"));

if (user && user.token) {
  getPosts(user.id).then((resp) => {
    posts.value = resp;
  });
}
</script>
