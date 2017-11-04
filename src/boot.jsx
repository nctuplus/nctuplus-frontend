import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from './js/Redux/Reducers'
import Router from './js/Router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './assets/styles/main.scss'

injectTapEventPlugin()
let store = createStore(RootReducer)

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
