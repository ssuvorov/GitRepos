import {
  CHANGE_USERNAME,
  CLEAR_ALL,
  REPO_REQUEST,
  REPO_SUCCESS,
  REPO_FAILURE
} from '../actions'

const initialState = {
  data: {},
  fetching: false,
  username: ''
}

export default (state = initialState, action) => {
  const updateState = {
    [CHANGE_USERNAME]: ({ username }) => (
      Object.assign(
        {}, initialState, { username }
      )
    ),
    [CLEAR_ALL]: () => ( 
      initialState
    ),
    [REPO_REQUEST]: () => (
      Object.assign(
        {}, state, { fetching: true, error: '' }
      )
    ),
    [REPO_SUCCESS]: ({ data }) => (
      Object.assign(
        {}, state, { data }, { fetching: false }
      )
    ),
    [REPO_FAILURE]: ({ error }) => (
      Object.assign(
        {}, state, { fetching: false, error: error.message }
      )
    )
  }[action.type]

  if (typeof updateState === 'function') return updateState(action)

  return state
}