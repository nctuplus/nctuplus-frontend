import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Reducer from 'api/Reducers'
import thunk from 'redux-thunk'
import Router from 'Router'
import moment from 'moment'
import 'moment/locale/zh-tw'
import 'assets/styles/main.scss'

let store = createStore(Reducer, applyMiddleware(thunk))
moment.locale('zh-tw')

// global get cookie method
window.getCookie = (name) => {
  let match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
  if (match) return match[2]
}

if (typeof (document) !== 'undefined' && window) {
  window.onload = () => {
    // set token from cookie to local storage
    const token = window.getCookie('access-token')
    const client = window.getCookie('client')
    const uid = window.getCookie('uid')
    if (token && uid && client) {
      const storage = window.localStorage
      storage.setItem('token', token)
      storage.setItem('client', client)
      storage.setItem('uid', uid)
    }

    return render(
      <Provider store={store}>
        <Router />
      </Provider>,
      document.getElementById('app')
    )
  }
}
