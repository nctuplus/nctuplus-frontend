
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from '../../../constants'

const initialState = {
  data: [],
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  FETCH_EVENTS_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  FETCH_EVENTS_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  UPDATE_EVENTS_PAGE: (state, action) => ({ ...state, page: action.payload }),
  UPDATE_EVENTS: (state, action) => ({ ...state, data: action.payload })
}, initialState)
