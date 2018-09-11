
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  data: {},
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  PATCH_COURSE_MAP_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  PATCH_COURSE_MAP_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  PATCH_COURSE_MAP_RESET: (state) => ({ ...state, status: FETCHING_STATUS.IDLE })
}, initialState)
