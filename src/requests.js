import axios from "axios";
import config from './config'

export const GET = 'get'
export const POST = 'post'
export const PUT = 'put'
export const DELETE = 'delete'

axios.defaults.withCredentials = true

export default function request ({ method, url, data, options }) {
  axios.defaults.withCredentials = true
  axios.defaults.xsrfCookieName = "csrftoken"
  axios.defaults.xsrfHeaderName = "X-CSRFToken"
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  axios.defaults.baseURL = config.api.baseURL
  return axios[method](url, data, options)
    .then((res) => res.data)
    .catch((error) => {
    throw error
  })
}

export function get (url, options) {
  return request({ method: GET, url , options})
}
export function post (url, data, options) {
  return request({ method: POST, url, data, options })
}
export function put (url, data, options) {
  return request({ method: PUT, url, data, options })
}
export function deleteReq (url, options) {
  return request({ method: DELETE, url , options})
}