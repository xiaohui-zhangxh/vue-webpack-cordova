import axios from 'axios'
import { AuthResponse, AuthRequest } from './http.interceptors'

let getApiUrl = function (path) {
  /* global __API_HOST__:true */
  return (typeof (__API_HOST__) === 'undefined' ? '' : __API_HOST__) + path
}

let http = axios.create({
  baseURL: getApiUrl('/api/v1/') // ,
  // headers: {'X-Custom-Header': 'foobar'}
})

AuthResponse(http)
AuthRequest(http)

export {getApiUrl}
export default http
