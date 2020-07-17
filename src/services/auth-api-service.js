import { post } from '../requests'
import config from '../config'

const ENDPOINTS = {
    LOGIN_URL: config.api.loginURL,
}

export async function authLogin (username, password) {
  try {
    const data = {
      username,
      password,
    }
    const response = await post(`${ENDPOINTS.LOGIN_URL}/`, data)
    const expirationDate = new Date().getTime() * 3600 * 1000
    localStorage.setItem('csrftoken', response.token)
    localStorage.setItem('expirationDate', expirationDate)
    document.cookie = `csrftoken=${response.token}`
    return response.token
  } catch (error) {
    console.log(error)
  }
}

export function logout () {
  localStorage.removeItem('csrftoken')
  localStorage.removeItem('expirationDate')
}
