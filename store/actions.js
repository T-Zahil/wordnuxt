import api from '../api/index'

export const getCategories = ( {
  commit,
  state
}, slug ) => {
  return new Promise( ( resolve, reject ) => {
    // call getCategories() from API
    api.getCategories( slug ).then(
      response => {
        commit( "CATEGORIES", response )
        resolve( response )
      },
      response => {
        reject( response )
      }
    )
  } )
}
