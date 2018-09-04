
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from '../../../constants'

const initialState = {
  data: [],
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  FETCH_DEPARTMENTS_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  FETCH_DEPARTMENTS_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  UPDATE_DEPARTMENTS: (state, action) => ({ ...state, data: action.payload })
}, initialState)
