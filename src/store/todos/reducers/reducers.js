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
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp
