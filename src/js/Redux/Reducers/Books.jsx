
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { createSelector } from 'reselect'
import { HOST, FETCHING_STATUS } from '../../constants'

const initialState = {
  data: null,
  status: FETCHING_STATUS.IDLE,
}

export const BooksReducer = handleActions({
  UPDATE_PAGE: (state, action) => ({ ...state, page: action.payload }),
  APPLY_FILTER: (state, action) => ({ ...state, ...action.payload})
}, initialState)
