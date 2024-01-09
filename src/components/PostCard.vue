<template>
    <div
        class=" flex flex-col flex-1 container p-6 m-9 border-2 min-w-fit max-w-6xl rounded-lg shadow-lg bg-bida-secondary">
        <div class="flex flex-col gap-6">
            <div class="flex flex-row gap-4 items-center">
                <img src="https://th.bing.com/th/id/OIP.eluLjywG2GQ4-gyh0aboHgHaEK?rs=1&pid=ImgDetMain" alt="profile photo"
                    class="w-16 h-16 rounded-full">
                <span class="font-bold">Ayşe</span>
                <span class="font-thin text-sm">4 Jan</span>
            </div>
            <div class="flex flex-row justify-end gap-4 text-yellow-950">
                <span>Inception</span>
                <span>8.5/10</span>
            </div>
            <span class="font-semibold text-xl capitalize">{{ title }}</span>
            <p>{{ hideContent }} </p>
            <div class="flex flex-row gap-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-6 h-6 fill-yellow-950">
                    <path
                        d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-6 h-6 fill-yellow-950">
                    <path fill-rule="evenodd"
                        d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
                        clip-rule="evenodd" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-6 h-6 fill-yellow-950">
                    <path fill-rule="evenodd"
                        d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    isDetailed: {
        required: true,
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: '',
    },
    content: {
        type: String,
        default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatibus cupiditate aliquid corrupti necessitatibus, asperiores et blanditiis dolor ipsa eligendi. Expedita alias earum sit debitis ipsam accusantium cumque iste sed? Iure corrupti unde necessitatibus ab voluptatibus corporis possimus, eveniet nisi laborum eos.Distinctio, officiis quod optio recusandae fuga aut ipsam minus possimus facere mollitia nobis ullam eos quia fugiat error. Laborum fugiat ipsum nemo maxime enim.Voluptatibus autem quae, ab dolorum perferendis, similique, atque quibusdam distinctio nobis aliquam hic ad dolore inventore nesciunt suscipit pariatur ipsa totam nisi.Totam, dolores.',
    },

})

const hideContent = computed(() => {
    return props.isDetailed ? props.content : props.content.substring(0, 500) + '....'
})
</script>