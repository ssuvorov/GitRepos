export const CHANGE_USERNAME = 'CHANGE_USERNAME'
export const GET_REPOSITORIES = 'GET_REPOSITORIES'
export const SHOW_SPINNER = 'SHOW_SPINNER'

export const changeUsername = (username) => {
  return {
    type: CHANGE_USERNAME,
    'username': username
  }
  // payload: { username }
}

export const showSpinner = () => ({
  type: SHOW_SPINNER,
  payload: {}
})

export const getRepositories = () => ({
  type: GET_REPOSITORIES,
  payload: {}
})