import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'

import Repositories from './components/repositories'
import SearchForm from './components/search-form'

class App extends Component {
  constructor(props) {
    super(props)

    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
  }

  onChangeUsername(e) {
    this.props.actions.changeUsername(e.target.value)
  }

  onSearchSubmit(e) {
    const { actions, username } = this.props;

    e.preventDefault()
    actions.getRepositories(username)
  }

  render() {
    const { username, data } = this.props

    return (
      <div className="wrapper">
        <h1>Application</h1>
        <SearchForm
          onSearchSubmit={this.onSearchSubmit}
          onChangeUsername={this.onChangeUsername}
          username={username}
        />
        <Repositories repositories={data} />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
}

// pass redux state through props to the component
const mapStateToProps = (state) => ({
  username: state.general.username,
  data: state.general.data
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)