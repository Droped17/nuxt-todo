<script setup lang="ts">
import CreateTodo from './CreateTodo.vue';

const {todos,addTodo} = useTodo()

const onTodoCreated = (title: string) => {
    addTodo(title)
}

</script>

<template>
    <div>
        <ul>
            <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
        </ul>

        <CreateTodo @created="onTodoCreated"/>
    </div>
</template>