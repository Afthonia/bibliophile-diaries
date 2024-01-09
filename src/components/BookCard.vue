<template>
    <div class="book-card" v-if="coverUrl !== ''">
        <img :src="coverUrl" :alt="title" class="w-60 h-80">
        <div class="p-1 my-3">
            <span class="block text-lg ">{{ title }}</span>
            <div v-for="author in authors" :key="author">
                <span class="block text-sm">{{ author }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: '',
    },
    authors: {
        type: Array,
        default: [],
    },
    coverUrl: {
        type: String,
        default: '',
    },
})
</script>