
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { createSelector } from 'reselect'
import { HOST, FETCHING_STATUS } from '../../constants'

const initialState = {
  data: null,
  status: FETCHING_STATUS.IDLE,
  filter: {},
  page: 1,
  maxPage: 1024,
}

const DiscussesReducer = handleActions({
  UPDATE_PAGE: (state, action) => ({ ...state, page: action.payload }), 
}, initialState)


export default RootReducer
