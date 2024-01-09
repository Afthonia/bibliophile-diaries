<template>
    <div v-for="comment in comments" :key="comment.id">
        <CommentCard :content="comment.content" />
    </div>
</template>

<script setup>
import CommentCard from '../components/CommentCard.vue';
import getUserComments from '../composables/comment/getComments';


const { comments, load, error } = getUserComments(1)
//TODO: change the parameter to the actual userID value later

load()

</script>