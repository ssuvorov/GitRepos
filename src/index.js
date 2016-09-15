import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import App from './App'

const devTools = window.devToolsExtension && window.devToolsExtension()
const store = createStore(reducers, devTools)

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
