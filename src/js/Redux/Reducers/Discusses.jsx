
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from '../../constants'

const initialState = {
  status: FETCHING_STATUS.IDLE,
  data: [],
  page: 1,
  max_page: 1
}

export default handleActions({
  FETCH_DISCUSSES_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  FETCH_DISCUSSES_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  UPDATE_DISCUSSES_PAGE: (state, action) => ({ ...state, page: action.payload }),
  UPDATE_DISCUSSES: (state, action) => ({ ...state, data: action.payload })

}, initialState)
