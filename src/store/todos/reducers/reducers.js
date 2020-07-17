import * as actionTypes from '../actions/actionTypes'
import { combineReducers } from 'redux'

function todos (state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_TODOS:
      return Object.assign({}, state, {
        todos: action.todos
      })
    case actionTypes.ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: action.todo.id,
            title: action.todo.title,
            content: action.todo.content,
            created_at: action.todo.created_at,
            created_by: action.todo.created_by
          }
        ]
      })
    case actionTypes.UPDATE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if (todo.id !== action.todo.id) {
            return todo
          }

          return Object.assign({}, todo, {
            title: action.todo.titile,
            content: action.todo.content,
          })
        })
      })
    case actionTypes.DELETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.todo.id)
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp
