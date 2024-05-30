<template>
  <div v-for="comment in comments" :key="comment.id">
    <CommentCard
      :content="comment.content"
      :commenter="comment.commenter"
      :createdAt="comment.created_at"
      :commenterID="comment.commenter_id"
      :commentID="comment.id"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CommentCard from "../components/CommentCard.vue";
import getUserComments from "../composables/comment/getUserComments";

const user = JSON.parse(localStorage.getItem("user"));

const comments = ref([]);

if (user && user.token) {
  getUserComments(user.id).then((resp) => {
    comments.value = resp;
  });
}
</script>
