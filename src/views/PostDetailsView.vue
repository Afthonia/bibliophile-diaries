<template>
    <div class="flex flex-col gap-5 items-stretch overflow-x-auto">
        <template v-if="post">
            <PostCard :isDetailed="true" :title="post.title" :content="post.content" />
            <CommentList :postID="Number(id)" />
        </template>
        <template v-else>
            <p v-if="error">Error loading post.</p>
            <p v-else>Loading post...</p>
        </template>
    </div>
</template>

<script setup>
import PostCard from '../components/PostCard.vue'
import CommentList from '../components/CommentList.vue'
import getPost from '../composables/post/getPost'
import { useRoute } from 'vue-router';

const route = useRoute()

const id = route.params.id

const { post, load, error } = getPost(id)

load()
</script>
