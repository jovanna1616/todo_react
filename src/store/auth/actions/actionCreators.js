import * as actionTypes from './actionTypes'
import { post } from '../../../requests'
import config from '../../../config'

const ENDPOINTS = {
  LOGIN_URL: config.api.loginURL,
}

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
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
  localStorage.removeItem('user')
  localStorage.removeItem('expirationDate')
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const checkAuthTokenTimeOut = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout())
    }, expirationTime * 1000);
  }
}

export const authLogin = (username, password) => {
  // TODO: refactor
  // return dispatch => {
  //   dispatch(authStart())
  //   try {
  //     const data = new URLSearchParams();
  //     data.append('username', username);
  //     data.append('password', password);
  //     const token = post(`${ENDPOINTS.LOGIN_URL}/`, data)
  //     const expirationDate = new Date(new Date().getTime() * 3600 * 1000)
  //     localStorage.setItem('token', token)
  //     localStorage.setItem('expirationDate', expirationDate)
  //   } catch (error) {
  //     dispatch(authFail(error))
  //   }
  // }
  
  try {
      const data = new URLSearchParams();
      data.append('username', username);
      data.append('password', password);
      const token = post(`${ENDPOINTS.LOGIN_URL}/`, data)
      const expirationDate = new Date(new Date().getTime() * 3600 * 1000)
      localStorage.setItem('token', token)
      localStorage.setItem('expirationDate', expirationDate)
    } catch (error) {
      console.log(error)
    }
}

export const getCookie = (cname) => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
