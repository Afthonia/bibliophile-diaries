<template>
    <Teleport to="body">
        <div v-show="modalActive"
            class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
            <div class="p-5 bg-bida-secondary self-start mt-32 max-w-screen-md rounded-md">
                <slot />
                <button @click="$emit('close-modal')" class="text-white mt-8 bg-bida-primary py-2 px-6 rounded-md block">
                    Close
                </button>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
defineEmits(["closeModal"]);
defineProps({
    modalActive: {
        type: Boolean,
        default: false,
    },
})
</script>