<template>
  <div class="flex flex-col gap-5 items-stretch overflow-x-auto">
    <template v-if="post">
      <!-- <PostCard
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
      /> -->
      <div
        v-show="comments !== null"
        v-for="comment in comments"
        :key="comment.id"
      >
        <CommentCard
          :content="comment.content"
          :commenter="comment.commenter"
          :createdAt="comment.created_at"
          :commenterID="comment.commenter_id"
          :commentID="comment.id"
        />
      </div>
      <form class="flex gap-2 px-20 items-center">
        <input
          class="p-3"
          type="text"
          v-model="newComment"
          placeholder="Leave a comment..."
        />
        <svg
          @click="handleCreateComment"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-9 text-bida-side-color-1 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
      </form>
    </template>
    <template v-else>
      <p>Loading post...</p>
    </template>
  </div>
</template>

<script setup>
// import PostCard from "../components/PostCard.vue";
// import CommentList from "../components/CommentList.vue";
import getPost from "../composables/post/getPost";
import createComment from "../composables/comment/createComment";
import { useRoute } from "vue-router";
import { ref } from "vue";
import router from "../router";
import CommentCard from "../components/CommentCard.vue";
import getPostComments from "../composables/comment/getPostComments";

const route = useRoute();

const id = route.params.id;

//console.log(id);

const post = ref(null);

getPost(id).then((resp) => {
  post.value = resp;
  console.log(post.value);
});

const comments = ref(null);

getPostComments(id).then((resp) => {
  comments.value = resp;
  console.log(comments.value);
});

const newComment = ref("");

const handleCreateComment = async () => {
  const resp = createComment(newComment.value, Number(id))
  if (resp) {
      console.log("shared");
      router.go(0);
    }
};
</script>
