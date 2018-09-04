
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from '../../../constants'

const initialState = {
  data: {},
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  POST_DEPARTMENT_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  POST_DEPARTMENT_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  POST_DEPARTMENT_RESET: (state) => ({ ...state, status: FETCHING_STATUS.IDLE })
}, initialState)
