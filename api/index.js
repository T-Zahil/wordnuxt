import config from "./config"

export default {
  baseUrl: config.baseUrl,
  /* * * *
   * RETURN A SINGLE PAGE
   * * * */
  getPage( slug ) {
    return new Promise( ( resolve, reject ) => {
      request.defaults.baseURL = this.baseUrl
      request.get( `pages?slug=${slug}` ).then( response => {
        const data = [ ...response.data ][ 0 ]
        if ( response.status === 200 && response.data.length > 0 ) {
          const filtered = {
            content: data.content.rendered,
            author: data.author,
            date: data.date,
            date_gmt: data.date_gmt,
            excerpt: data.excerpt.rendered,
            featured_media: data.featured_media,
            guid: data.guid.rendered,
            link: data.link,
            slug: data.slug,
            title: data.title.rendered
          };
          resolve( filtered )
        } else {
          reject( response )
        }
      } );
    } );
  },
}
