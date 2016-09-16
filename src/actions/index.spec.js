import expect from 'expect'
  
import * as actions from './index'

describe('repo actions', () => {
  it('changeUsername should create CHANGE_USERNAME action', () => {
    expect(actions.changeUsername('ssuvorov')).toEqual({
      type: 'CHANGE_USERNAME',
      username: 'ssuvorov'
    })
  })
  
  it('clearAll should create CLEAR_ALL action', () => {
    expect(actions.clearAll()).toEqual({
      type: 'CLEAR_ALL'
    })
  })
})