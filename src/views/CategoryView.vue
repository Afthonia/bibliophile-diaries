<template>
    <h1 class="p-7 font-bold text-2xl capitalize">{{ category }} Books</h1>
    <div class="flex flex-row flex-wrap">
        <div class="block" v-for="book in books" :key="books.indexOf(book)">
            <BookCard :coverUrl="book.coverUrl" :title="book.title" :authors="book.authors" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import BookCard from '../components/BookCard.vue'
import getBooks from '../composables/books/getBooks'

const props = defineProps({
    category: {
        type: String,
        default: ''
    }
})

const { books, load, error } = getBooks()

load(props.category, 'subject')

const categoryRef = ref(props.category)

watch(() => props.category, (newValue) => {
    categoryRef.value = newValue
    books.value = []
    load(categoryRef.value, 'subject')
})

if (error.value !== null) {
    console.log(error.value)
}
</script>