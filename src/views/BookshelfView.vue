<template>
    <div class="flex flex-wrap">
        <BookCard coverUrl="https://th.bing.com/th/id/R.1383e6161afbe5c07d6f565b86c179a7?rik=vOr%2bpGKEAMsHrw&riu=http%3a%2f%2fecx.images-amazon.com%2fimages%2fI%2f91zZB9SzsIL.jpg&ehk=N44znyy6791BnQwS6Q6gAdaXCSqFksfqDS1876zCdHE%3d&risl=&pid=ImgRaw&r=0" title="Blabla" author="blabla" publisher="bla" />
        <!-- <BookDetailsModal :modalActive="modalActive" /> -->
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BookDetailsModal from '../components/BookDetailsModal.vue';
import BookCard from '../components/BookCard.vue';

defineProps({
    favBooks: {
        type: Array,
        default: []
    }
})

const modalActive = ref(false)

const toggleBookDetails = () => {
    modalActive.value = true
}
</script>