<template>
    <Teleport to="body">
        <div v-show="modalActive"
            class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
            
                
        </div>
    </Teleport>
</template>

<script setup>
defineEmits(["close-modal"])
defineProps({
    modalActive: {
        type: Boolean,
        default: false,
    }
})
</script>