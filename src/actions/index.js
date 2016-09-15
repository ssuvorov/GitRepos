import git from '../middleware/api'

export const CHANGE_USERNAME = 'CHANGE_USERNAME'
export const CLEAR_ALL = 'CLEAR_ALL'

export const REPO_REQUEST = 'REPO_REQUEST'
export const REPO_SUCCESS = 'REPO_SUCCESS'
export const REPO_FAILURE = 'REPO_FAILURE'

export const changeUsername = (username) => {
  return {
    type: CHANGE_USERNAME,
    username
  }
}

export const clearAll = () => {
  return {
    type: CLEAR_ALL
  }
}

const receiveError = (error) => {
  return {
    type: REPO_FAILURE,
    error
  }
}

const receiveRepos = (data) => {
  return {
    type: REPO_SUCCESS,
    data: {
      total: data.length,
      items: data
    }
  }
}

// Relies on Redux Thunk middleware.
export function getRepositories(username) {
  return dispatch => {
    dispatch({
      type: REPO_REQUEST
    })

    git.getRepos(`users/${username}/repos`).then(
      data => {
        dispatch(receiveRepos(data))
      },
      error => {
        dispatch(receiveError(error))
      }
    )
  }
}