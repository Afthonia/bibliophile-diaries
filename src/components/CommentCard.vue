<template>
  <div class="container p-8">
    <div class="flex flex-col gap-4">
      <div class="flex flex-row gap-4 items-center">
        <img
          src="@/assets/profile.png"
          alt="profile photo"
          class="w-10 h-10 rounded-full"
        />
        <span class="font-bold text-sm">{{ commenter }}</span>
        <span class="font-thin text-xs">{{ createdAtFormat }}</span>
        <svg
          v-show="isShown"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 cursor-pointer"
          @click="handleDelete"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </div>

      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import deleteComment from "../composables/comment/deleteComment";
import router from "../router";
import { format } from "date-fns";

const props = defineProps({
  commentID: {
    type: Number,
    default: 0,
  },
  commenter: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  createdAt: {
    type: String,
    default: "",
  },
  commenterID: {
    type: Number,
    default: 0,
  },
});

const createdAtFormat = ref(null)
createdAtFormat.value = format(props.createdAt, "yyyy-MM-dd")

const isShown = ref(false);
const user = JSON.parse(localStorage.getItem("user"));

if (user && user.id === props.commenterID) {
  isShown.value = true;
}

const handleDelete = async () => {
  const resp = deleteComment(props.commentID);

  if (resp === true) {
    console.log("deleted");
    router.go(0);
  }
};
</script>
