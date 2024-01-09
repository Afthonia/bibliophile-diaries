<template>
    <div class="flex flex-col justify-start pl-14">
        <div v-if="error === null" v-for="comment in comments" :key="comment.id">
            <CommentCard :content="comment.content" />
        </div>
        <div v-else>
            <span>No Comment!</span>
        </div>
    </div>
</template>

<script setup>
import CommentCard from './CommentCard.vue'
import getComments from '../composables/comment/getComments'

const props = defineProps({
    postID: {
        type: Number,
        required: true,
    },
})

const { comments, load, error } = getComments.getPostComments(props.postID)

load()

</script>