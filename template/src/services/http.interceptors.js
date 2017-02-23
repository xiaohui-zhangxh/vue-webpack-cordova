import router from 'router'
import store from 'store'
import {GET_USER_TOKEN} from 'store/modules/common'

function AuthRequest (http) {
  http.interceptors.request.use((config) => {
    var token = store.getters[GET_USER_TOKEN]
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })
}

function AuthResponse (http) {
  http.interceptors.response.use((response) => {
    return response
  }, (error) => {
    if (error.response.status === 401) {
      router.push({name: 'login'})
    }
    return Promise.reject(error)
  })
}

export { AuthResponse, AuthRequest }
