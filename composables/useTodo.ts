import {v4 as uuid } from 'uuid'

export interface TodoItems {
    id: string
    title: string
    done: boolean
}

export interface TodoList {
    id: string
    title: string
    items: TodoItems[]
} 


export const useTodo = () => {
    const todos = useState<TodoList[]>('todos', () => [])

    const addTodo = (title: string) => {
        todos.value.push({
            id: uuid(),
            title,
            items: []
        })
    }

    const upadateTodo = (id: string, newTitle: string) => {
        const todo = todos.value.find((todo) => todo.id === id)
        if (todo) {
            todo.title = newTitle
        }
    }

    const removeTodo = (id: string) => {
        todos.value = todos.value.filter((todo) => todo.id !== id)
    }

    return {
        todos,
        addTodo,
        upadateTodo,
        removeTodo
    }

}