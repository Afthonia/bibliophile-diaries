<template>
    <div v-for="post in posts" :key="post.id">
        <PostCard :isDetailed="true" :title="post.title" :content="post.content" />
    </div>
</template>

<script setup>
import PostCard from '../components/PostCard.vue'
import getPosts from '../composables/get/getPosts'


const { posts, load, error } = getPosts()

load()
</script>