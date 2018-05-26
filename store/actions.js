import api from '../api/index'

/* * * *
 * GET CATEGORIES
 * * * */
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

/* * * *
 * GET ONE CATEGORY
 * * * */
export const getCategory = ( {
  commit,
  state
}, slug ) => {
  return new Promise( ( resolve, reject ) => {
    api.getCategory( slug ).then(
      response => {
        commit( "CATEGORY", response );
        resolve( response );
      },
      response => {
        reject( response );
      }
    );
  } );
};
