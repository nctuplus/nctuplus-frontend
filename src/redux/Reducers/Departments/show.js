
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  data: {},
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  GET_DEPARTMENT_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  GET_DEPARTMENT_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  STORE_DEPARTMENT: (state, action) => ({ ...state, data: action.payload })
}, initialState)
