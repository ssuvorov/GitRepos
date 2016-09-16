import expect from 'expect'
import general from './general'

describe('general reducer', () => {
  const initialState = {
    data: {},
    fetching: false,
    username: ''
  }

  it('should handle initial state', () => {
    expect(
      general(undefined, {})
    ).toEqual(initialState)
  })

  it('should handle CHANGE_USERNAME', () => {
    expect(
      general(undefined, {
        type: 'CHANGE_USERNAME',
        username: 'ssuvorov'
      })
    ).toEqual(Object.assign({}, initialState, { username: 'ssuvorov' }))
  })

  it('should handle CLEAR_ALL', () => {
    expect(
      general(undefined, {
        type: 'CLEAR_ALL'
      })
    ).toEqual(initialState)
  })
})