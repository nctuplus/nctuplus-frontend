
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'constants'

const initialState = {
  data: [],
  status: FETCHING_STATUS.IDLE,
  data_follow: [],
  status_follow: FETCHING_STATUS.IDLE
}

export default handleActions({
  FETCH_EVENTS_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  FETCH_EVENTS_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  UPDATE_EVENTS_PAGE: (state, action) => ({ ...state, page: action.payload }),
  UPDATE_EVENTS: (state, action) => ({ ...state, data: action.payload }),
  FETCH_FOLLOW_EVENTS_START: (state) => ({ ...state, status_follow: FETCHING_STATUS.FETCHING }),
  FETCH_FOLLOW_EVENTS_DONE: (state) => ({ ...state, status_follow: FETCHING_STATUS.DONE }),
  STORE_FOLLOW_EVENTS: (state, action) => ({ ...state, data_follow: action.payload })
}, initialState)
