import * as actionTypes from './actionTypes'

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    isLoggedIn: token || false
  }
}

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const authLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}



