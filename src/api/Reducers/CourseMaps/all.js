
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  data: [],
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  FETCH_COURSE_MAPS_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  UPDATE_COURSE_MAPS: (state, action) => ({ ...state, data: action.payload }),
  FETCH_COURSE_MAPS_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE })
}, initialState)
