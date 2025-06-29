<script setup lang="ts">

const {getTodo} = useTodo()

const props = defineProps<{
    id: string
}>()

const title = ref<string>('')
const getCurrentTodo = getTodo(props.id)

const handleSubmit = () => {
    getCurrentTodo.addItem(title.value)
    title.value = ''
}

</script>

<template>
    <form class="flex gap-2" @submit.prevent="handleSubmit">
        <UInput v-model="title" class="w-full"/>
        <UButton size="xs" type="submit">Add item</UButton>
    </form>
</template>