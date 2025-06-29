<script setup lang="ts">
const title = ref<string>('')

const emit = defineEmits<{'created':[value: string]}>()

const handleSubmit = () => {
    emit('created', title.value)
    console.log(title.value);
    title.value = ''
}

</script>

<template>
    <form class="flex gap-2" @submit.prevent="handleSubmit">
        <UInput v-model="title" class="w-full"/>
        <UButton type="submit">Add</UButton>
    </form>
</template>