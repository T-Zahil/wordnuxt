import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store( {
    state: {
      page: {}
    }
  } )
}

export default store
