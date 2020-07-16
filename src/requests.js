import axios from "axios";

export const GET = 'get'
export const POST = 'post'
export const PUT = 'put'
export const DELETE = 'delete'

export default function request ({ method, url, data, headers = {}, options }) {
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