import { get, put, deleteReq, post } from '../requests'
import config from '../config'

const ENDPOINTS = {
    TODOS_URL: config.api.todosURL,
    TODO_URL: `${config.api.todosURL}/:id/`
}

export function getTodoList () {
    return get(ENDPOINTS.TODOS_URL)
}

export function createTodo (todo) {
    return post(`${ENDPOINTS.TODOS_URL}/`, todo)
}

export function updateTodo (todo) {
    return put(getValueFromEndpoints(ENDPOINTS, 'TODO_URL', 'id', todo.id), { title: todo.title, content: todo.content })
}

export function deleteTodo (todo) {
    return deleteReq(getValueFromEndpoints(ENDPOINTS, 'TODO_URL', 'id', todo.id))
}

export const getValueFromEndpoints = (endpoints, property, placeholder, value) => endpoints[property].replace(`:${placeholder}`, value)
