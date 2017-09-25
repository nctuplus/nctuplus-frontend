import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from './js/Redux/Reducers'
import RootRouter from './js/RootRouter'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
let store = createStore(RootReducer)

import './assets/styles/main.scss'

if (typeof(document) !== 'undefined' && window) {
  window.onload = () => {
    return render( 
      <Provider store={store}>
        <RootRouter/>
      </Provider>,
      document.getElementById('app') 
    );
  };
}
