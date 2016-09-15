import {
  CHANGE_USERNAME,
  GET_REPOSITORIES,
  SHOW_SPINNER
} from '../actions'

const initialState = {
  username: '',
  data: []
}

export default (state = initialState, action) => {
  const updateState = {
    [CHANGE_USERNAME]: ({ username }) => (
      Object.assign({}, state, {'username': username})
    ),
    [GET_REPOSITORIES]: () => (
      Object.assign({}, state, { spinner: true })
    ),
    [SHOW_SPINNER]: () => (
      Object.assign({}, state, { spinner: true })
    )
  }[action.type]

  if (typeof updateState === 'function') return updateState(action)

  return state
}