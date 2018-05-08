import config from "./config"
import request from 'axios'

export default {
  baseUrl: config.baseUrl,
  /* * * *
   * RETURN CATEGORIES
   * * * */
  getCategories( slug ) {
    return new Promise( ( resolve, reject ) => {
      request.defaults.baseURL = this.baseUrl;
      return request.get( `categories` ).then( response => {
        const data = [ ...response.data ];
        if ( response.status === 200 && response.data.length > 0 ) {
          resolve( data );
        }
      } );
    } );
  }
}
