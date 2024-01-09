<template>
    <div class="p-12 flex flex-col gap-7">
        <div class="flex flex-row gap-3 items-center">
            <h1 class="text-3xl">Read Better!</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 cursor-pointer"
                @click="toggleModal">
                <path fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clip-rule="evenodd" />
            </svg>
            <InfoModal :modalActive="modalActive" @closeModal="toggleModal">
                <div class="p-4 bg-bida-secondary self-start max-w-screen-md">
                    <h1 class="text-2xl py-3">Dictionary Usage Information</h1>
                    <p class="py-3">You can find out the meanings of the words that you faced when reading easily!</p>
                    <p class="py-3">Please enter the word you want to search into the textfield. <span
                            class="text-red-500">Be sure to enter a valid word!</span> </p>
                    <p class="py-3">After
                        typing,
                        you
                        can search it by pressing the 'Find' button. You may need to wait for a little while to see the
                        results
                        that
                        are fetching from Dictionary API.</p>
                    <p>Apologizes if the word cannot be found. We will make sure to develop for further process.</p>

                </div>
            </InfoModal>
        </div>
        <div class="flex flex-row gap-2">
            <input v-model="searchValue" type="text" placeholder="Search A Word..." class="rounded-sm max-w-xl p-5 w-full"
                :class="{ 'border-2 border-red-700 shadow-sm shadow-red-700': isEmpty }">
            <button class="px-3 w-40 rounded-sm bg-bida-primary hover:bg-bida-third flex-initial"
                @click="searchWord">Find</button>
        </div>

        <div v-if="isEmpty !== null" class="flex flex-col gap-7">
            <h1 class="text-2xl font-bold capitalize">{{ words[0].word }}</h1>
            <span class="text-base">{{ words[0].phonetic }}</span>
            <audio v-if="words[0].phonetics[0].audio.length > 0" :src="words[0].phonetics.length === 2 ?
                words[0].phonetics[1].audio :
                words[0].phonetics[0].audio" controls></audio>

            <div v-for="word in words" :key="words.indexOf(word)">
                <span class="bold text-xl">{{ words.indexOf(word) + 1 }} </span>
                <div v-for="meaning in word.meanings" :key="meaning.partOfSpeech" class="pl-4">
                    <p><strong class="capitalize">{{ meaning.partOfSpeech }}: </strong> {{ meaning.definitions[0].definition
                    }} </p>
                    <p v-if="meaning.definitions[0].example">Example: {{ meaning.definitions[0].example }} </p>
                    <br>
                </div>
            </div>
            <span v-if="error !== null">{{ error }} </span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import getWord from '../composables/get/getWord'
import InfoModal from '../components/InfoModal.vue';

const modalActive = ref(null)

const searchValue = ref('')

const isEmpty = ref(null)
const isLoading = ref(false)
const showWarning = ref(false)

const { words, load, error } = getWord()

const searchWord = () => {
    if (searchValue.value.length === 0) {
        isEmpty.value = true
        showWarning.value = true
    } else {
        isEmpty.value = false
        isLoading.value = true
        load(searchValue.value)
        showWarning.value = false
        isLoading.value = false
    }
    //console.log(meanings.value)
}

const toggleModal = () => {
    modalActive.value = !modalActive.value
}



</script>