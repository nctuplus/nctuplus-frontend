
import { combineReducers } from 'redux'
import all from './all'
import show from './show'
import post from './post'
import patch from './patch'

export default combineReducers({ all, show, post, patch })
