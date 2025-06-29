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

    const getTodo = (id: string) => {
        const allTodo = todos.value.find((todo) => todo.id === id)
        if (!allTodo) {
            throw new Error('Not found todo')
        }
        const addItem = (title: string) => {
            allTodo.items.push({
                id: uuid(),
                title,
                done: false
            })
        }
        const updateItem = (id: string, newTitle: string) => {
            const item = allTodo.items.find((item) => item.id === id)
            if (item) {
                item.title = newTitle
            }
        }
        const removeItem = (id: string) => {
            allTodo.items = allTodo.items.filter((item) => item.id === id)
        }
        const markItemDone = (id: string) => {
            const item = allTodo.items.find((item) => item.id === id)
            if (item) {
                item.done = true
            }
        }
        const markItemIUnDone = (id: string) => {
            const item = allTodo.items.find((item) => item.id === id)
            if (item) {
                item.done = false
            }
        }

        return {
            allTodo,
            addItem,
            updateItem,
            removeItem,
            markItemDone,
            markItemIUnDone
        }
    }

    return {
        todos,
        addTodo,
        upadateTodo,
        removeTodo,
        getTodo
    }

}