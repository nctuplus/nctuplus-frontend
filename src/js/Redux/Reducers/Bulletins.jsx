
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { createSelector } from 'reselect'
import { HOST, FETCHING_STATUS } from '../../constants'

const initialState = {
  data: null,
  status: FETCHING_STATUS.IDLE,
}

const BulletinsReducer = handleActions({
  FETCH_BULLETINS: (state, action) => state
}, initialState)


export default RootReducer
