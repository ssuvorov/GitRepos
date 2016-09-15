import 'isomorphic-fetch'

const API_ROOT = 'https://api.github.com/'

export default {
  getRepos(endpoint) {
    return fetch(API_ROOT + endpoint)
      .then(response => response.json().then( json => ({ json, response })) )
      .then(({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json)
        }

        return Promise.resolve(json)
    })
  }
}