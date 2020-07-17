import { createStore } from 'redux'
import * as actionTypes from '../actions/actionTypes'

function user(state = {}, action) {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return state + 1
    default:
      return state
  }
}

let store = createStore(user)

store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: actionTypes.AUTH_SUCCESS })