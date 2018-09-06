import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Reducer from 'redux/Reducers'
import thunk from 'redux-thunk'
import Router from 'Router'
import 'assets/styles/main.scss'

let store = createStore(Reducer, applyMiddleware(thunk))

// global get cookie method
window.getCookie = function (name) {
  let match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
  if (match) return match[2]
}

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
