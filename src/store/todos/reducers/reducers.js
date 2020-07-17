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
            title: action.title,
            content: action.content
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
