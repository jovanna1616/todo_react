import * as actionTypes from '../actions/actionTypes'
import { combineReducers } from 'redux'

function user (state = {}, action) {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: action.isLoggedIn
      })
    case actionTypes.AUTH_LOGOUT:
      return Object.assign({}, state, {
        isLoggedIn: false
      })
    default:
      return state
  }
}

const userApp = combineReducers({
  user
})

export default userApp
