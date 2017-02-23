export const CHANGE_VIEW_TITLE = 'common/change_view_title'
export const CHANGE_LOADING_STATUS = 'common/change_loading_status'

export const GET_USER_TOKEN = 'common/get_user_token'
export const SET_USER_TOKEN = 'common/set_user_token'
export const USER_AUTHENCATED = 'common/user_authencated'
export const GET_USER = 'common/get_user'
export const SET_USER = 'common/set_user'

// state
const state = {
  title: '',
  isLoading: false,
  user: {},
  token: window.localStorage.getItem('token')
}

// getters
const getters = {
  // allProducts: state => state.all
  [GET_USER] (state) {
    return state.user
  },
  [GET_USER_TOKEN] (state) {
    return state.token
  },
  [USER_AUTHENCATED] (state) {
    return state.token !== null
  }
}

// actions
const actions = {
  // getAllProducts ({ commit }) {
  //   shop.getProducts(products => {
  //     commit(RECEIVE_PRODUCTS, { products })
  //   })
  // }
}

// mutations
const mutations = {
  [CHANGE_VIEW_TITLE] (state, title) {
    state.title = title
  },
  [CHANGE_LOADING_STATUS] (state, payload) {
    state.isLoading = payload.isLoading
  },
  [SET_USER] (state, user) {
    state.user = Object.assign({}, state.user, user)
  },
  [SET_USER_TOKEN] (state, token) {
    window.localStorage.setItem('token', token)
    state.token = token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
