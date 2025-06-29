<script setup lang="ts">
import CreateTodo from './CreateTodo.vue';

const open = ref<boolean>(false)

const { todos, addTodo, upadateTodo, removeTodo } = useTodo()

const onTodoCreated = (title: string) => {
    addTodo(title)
}

const handleUpdated = (id: string,newTitle: string) => {
    console.log(id);
    console.log(newTitle);
    upadateTodo(id, newTitle)
    open.value = false
}

const handleRemoveTodo = (id: string) => {
    removeTodo(id)
}

</script>

<template>
    <div class="p-4">
        <ul class="flex flex-col gap-4">
            <li v-for="todo in todos" :key="todo.id" class="border p-2">
                <div class="flex justify-between">
                    {{ todo.title }}
                    <UModal 
                    v-model:open="open"
                    title="Update Title" 
                    :close="{
                        color: 'primary',
                        variant: 'outline',
                        class: 'rounded-full'
                    }">
                        <UButton label="Update" color="neutral" variant="subtle" />

                        <template #body>
                            <div class="p-4">
                                <form @submit.prevent="handleUpdated(todo.id, todo.title)">
                                    <UInput v-model="todo.title" class="w-full"/>
                                    <UButton type="submit" size="xs" color="success">update</UButton>
                                </form>
                            </div>
                        </template>
                    </UModal>
                        <UButton size="xs" color="error" @click="handleRemoveTodo(todo.id)">delete</UButton>
                </div>
                <TodoItem :todo="todo"/>
            </li>
        </ul>

        <CreateTodo @created="onTodoCreated" />

        <DevOnly>
            <pre>{{ todos }}</pre>
        </DevOnly>
    </div>
</template>