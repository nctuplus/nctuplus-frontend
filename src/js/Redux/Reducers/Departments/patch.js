
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from '../../../constants'

const initialState = {
  data: {},
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  PATCH_DEPARTMENT_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  PATCH_DEPARTMENT_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  PATCH_DEPARTMENT_RESET: (state) => ({ ...state, status: FETCHING_STATUS.IDLE })
}, initialState)
