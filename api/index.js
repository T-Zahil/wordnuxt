import config from "./config"
import request from 'axios'

export default {
  baseUrl: config.baseUrl,
  /* * * *
   * RETURN CATEGORIES
   * * * */
  getCategories() {
    return new Promise( ( resolve, reject ) => {
      request.defaults.baseURL = this.baseUrl;
      return request.get( `categories` ).then( response => {
        const data = [ ...response.data ];
        if ( response.status === 200 && response.data.length > 0 ) {
          resolve( data );
        }
      } );
    } );
  },
  /**
   * Returns category data and all posts under it (paginated)
   * @param  string slug Category slug (e.g. 'news')
   * @return Promise Filtered response
   */
  getCategory( slug ) {
    return new Promise( ( resolve, reject ) => {
      request.defaults.baseURL = this.baseUrl;
      return request
        .get( `categories&slug=${slug}` )
        .then( response => {
          const data = [ ...response.data ][ 0 ];
          if ( response.status === 200 ) {
            return {
              id: data.id,
              name: data.name,
              slug: data.slug
            };
          }
        } )
        .then( category => {
          return request
            .get( `posts&categories=${category.id}` )
            .then( response => {
              const data = [ ...response.data ];
              if ( response.status === 200 ) {
                category.posts = data.map( item => ( {
                  id: item.id,
                  title: item.title.rendered,
                  content: item.content.rendered,
                  excerpt: item.excerpt.rendered,
                  slug: item.slug
                } ) );
                resolve( category );
              } else {
                reject( response );
              }
            } );
        } );
    } );
  },
}
