import * as actionTypes from './actionTypes'

export const fetchTodos = (todos) => {
  return {
    type: actionTypes.FETCH_TODOS,
    todos
  }
}

export const addTodo = todo => {
  return {
    type: actionTypes.ADD_TODO,
    todo
  }
}

export const updateTodo = todo => {
  return {
    type: actionTypes.UPDATE_TODO,
    todo
  }
}

export const deleteTodo = todo => {
  return {
    type: actionTypes.DELETE_TODO,
    todo
  }
}
