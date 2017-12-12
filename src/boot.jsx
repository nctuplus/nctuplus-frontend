import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './js/Redux/Reducers'
import thunk from 'redux-thunk'
import Router from './js/Router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './assets/styles/main.scss'

injectTapEventPlugin()
let store = createStore(Reducer, applyMiddleware(thunk))

if (typeof (document) !== 'undefined' && window) {
  window.onload = () => {
    return render(
      <Provider store={store}>
        <Router />
      </Provider>,
      document.getElementById('app')
    )
  }
}
