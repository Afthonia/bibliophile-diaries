<template>
  <div
    class="flex flex-col flex-1 container p-6 m-9 border-2 min-w-fit max-w-6xl rounded-lg shadow-lg bg-bida-secondary"
  >
    <div class="flex flex-col gap-6">
      <div class="flex flex-row gap-4 items-center">
        <img
          src="@/assets/profile.png"
          alt="profile photo"
          class="w-16 h-16 rounded-full"
        />
        <span class="font-bold">{{ author }}</span>
        <span class="font-thin text-sm">{{ createdAtFormat }}</span>
        <div class="flex flex-row-reverse">
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
          <svg
            v-show="isShown"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            @click="toggleModal"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          <InfoModal :modalActive="modalActive" @closeModal="toggleModal">
            <div class="flex flex-col gap-4 p-7">
              <div
                class="flex flex-row gap-14 justify-center items-center mb-7"
              >
                <h1 class="text-xl font-bold inline">Add A Book Review</h1>
                <button
                  type="submit"
                  @click="editReview"
                  class="inline border-2 rounded-lg border-bida-primary py-2 px-3 text-bida-primary hover:bg-bida-fourth hover:duration-200"
                >
                  Update
                </button>
              </div>
              <input
                v-model="book"
                type="text"
                placeholder="Book Title"
                class="p-5 inline"
              />
              <input
                v-model="vote"
                type="number"
                placeholder="Vote (over 10)"
                min="0"
                max="10"
                class="p-5 inline"
              />
              <input
                v-model="title"
                type="text"
                placeholder="Post Title"
                class="p-5"
              />
              <input
                v-model="content"
                type="text"
                placeholder="Content"
                class="p-5"
              />
            </div>
          </InfoModal>
        </div>
      </div>
      <div class="flex flex-row justify-end gap-4 text-yellow-950">
        <span>{{ bookTitle }}</span>
        <span>{{ vote }}/10</span>
      </div>
      <span class="font-semibold text-xl capitalize">{{ title }}</span>
      <p>{{ hideContent }}</p>
      <div class="flex flex-row gap-4">
        <svg
          @click="toggleLiked"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 fill-yellow-950"
          :class="{ 'fill-bida-primary': isLiked }"
        >
          <path
            d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z"
          />
        </svg>
        {{ likeCount }}
        <RouterLink :to="{ name: 'post-details', params: { id: id } }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 fill-yellow-950"
          >
            <path
              fill-rule="evenodd"
              d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
              clip-rule="evenodd"
            />
          </svg>
        </RouterLink>
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 fill-yellow-950"
        >
          <path
            fill-rule="evenodd"
            d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
            clip-rule="evenodd"
          />
        </svg> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import deleteReview from "../composables/post/deleteReview";
import router from "../router";
import { ref } from "vue";
import toggleLike from "../composables/post/toggleLike";
import { format } from "date-fns";
import InfoModal from "./InfoModal.vue";
import updateReview from "../composables/post/updateReview";

const props = defineProps({
  isDetailed: {
    required: true,
    type: Boolean,
    default: false,
  },
  id: {
    type: Number,
    default: 0,
  },
  author: {
    type: String,
    default: "",
  },
  authorID: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  bookTitle: {
    type: String,
    default: "",
  },
  vote: {
    type: Number,
    default: 0,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  isLiked: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: String,
    default: '',
  },
});

const isLiked = ref(props.isLiked);
const likeCount = ref(props.likeCount);
const createdAtFormat = ref(null);

if (props.createdAt !== '') {
  createdAtFormat.value = format(props.createdAt, "yyyy-MM-dd");
}

const modalActive = ref(false);

const book = ref(props.bookTitle);
const vote = ref(props.vote);
const title = ref(props.title);
const content = ref(props.content);

const toggleLiked = async () => {
  toggleLike(props.id).then((resp) => {
    if (resp) {
      isLiked.value = true;
    } else {
      isLiked.value = false;
    }

    if (isLiked.value) {
      likeCount.value++;
    } else {
      likeCount.value--;
    }
  });
};

const handleDelete = async () => {
  const resp = deleteReview(props.id);

  if (resp === true) {
    console.log("deleted");
    router.go(0);
  }
};

const hideContent = computed(() => {
  return props.isDetailed
    ? props.content
    : props.content.substring(0, 500) + "....";
});

const user = JSON.parse(localStorage.getItem("user"));

let isShown = false;

if (user) {
  isShown = props.authorID === user.id;
}

const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

const editReview = async () => {
  const resp = updateReview(
    props.id,
    title.value,
    content.value,
    book.value,
    vote.value
  );
  if (resp) {
    console.log("updated");
    toggleModal();
    router.go(0);
  }
};
</script>
