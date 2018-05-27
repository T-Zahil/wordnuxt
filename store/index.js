import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

const store = () => {
  return new Vuex.Store( {
    state: {
      posts: null,
      post: {
        title: null,
        content: null
      },
      categories: {},
      category: {
        id: null,
        name: null,
        slug: null
      }
    },
    getters,
    actions,
    mutations
  } )
}

export default store
