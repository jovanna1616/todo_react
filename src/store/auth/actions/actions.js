import { post } from '../../../requests'
import config from '../../../config'

const ENDPOINTS = {
  LOGIN_URL: config.api.loginURL,
}

export const authLogin = async (username, password) => {
    try {
        const data = new URLSearchParams();
        data.append('username', username);
        data.append('password', password);
        const token = await post(`${ENDPOINTS.LOGIN_URL}/`, data)
        const expirationDate = new Date(new Date().getTime() * 3600 * 1000)
        localStorage.setItem('token', token)
        localStorage.setItem('expirationDate', expirationDate)
      } catch (error) {
        console.log(error)
      }
  }