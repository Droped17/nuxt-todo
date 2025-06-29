<script setup lang="ts">
const {getTodo} = useTodo()
const props = defineProps<{
    todo: TodoList
}>()

const currentTodo = getTodo(props.todo.id) 

</script>

<template>
    <ul>
        <li v-for="item in currentTodo.allTodo.items" :key="item.id">
           <UCheckbox :label="item.title"/>
        </li>
    </ul>
    <div>
        <FormCreateTodoItem :id="todo.id"/>
    </div>
</template>