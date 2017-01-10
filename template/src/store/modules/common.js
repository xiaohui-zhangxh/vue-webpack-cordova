import * as types from '../mutation-types'

// state
const state = {
  title: ''
}

// getters
const getters = {
  // allProducts: state => state.all
}

// actions
const actions = {
  // getAllProducts ({ commit }) {
  //   shop.getProducts(products => {
  //     commit(types.RECEIVE_PRODUCTS, { products })
  //   })
  // }
}

// mutations
const mutations = {
  [types.CHANGE_VIEW_TITLE] (state, title) {
    state.title = title
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
