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

export const update = todo => {
  return {
    type: actionTypes.UPDATE_TODO,
    todo
  }
}

export const deleteSingleTodo = todo => {
  return {
    type: actionTypes.DELETE_TODO,
    todo
  }
}
