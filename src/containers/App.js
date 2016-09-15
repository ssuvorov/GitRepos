import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'

import Repositories from '../components/repositories'
import SearchForm from '../components/search-form'
import Error from '../components/error'

class App extends Component {
  constructor(props) {
    super(props)

    this.onClear = this.onClear.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }
  
  onClear(e) {
    e.preventDefault()
    this.props.actions.clearAll()
  }

  onChangeUsername(e) {
    this.props.actions.changeUsername(e.target.value)
  }

  onSearchSubmit(e) {
    const { actions, username } = this.props

    e.preventDefault()
    if (!username)  return
    actions.getRepositories(username)
  }

  render() {
    const {
      props: { data, error, fetching, username }
    } = this

    return (
      <div className="wrapper">
        <h1>Repositories</h1>
        <SearchForm
          fetching={fetching}
          onChangeUsername={this.onChangeUsername}
          onClear={this.onClear}
          onSearchSubmit={this.onSearchSubmit}
          username={username}
        />
        {
          error
            ? <Error message={error}/>
            : <Repositories fetching={fetching} repositories={data}/>
        }
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  
  error: PropTypes.string
}

// pass redux state through props to the component
const mapStateToProps = (state) => ({
  data: state.general.data,
  error: state.general.error,
  fetching: state.general.fetching,
  username: state.general.username
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)