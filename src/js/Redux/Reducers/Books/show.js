
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from '../../../constants'

const initialState = {
  data: {},
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  GET_BOOK_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  GET_BOOK_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  STORE_BOOK: (state, action) => ({ ...state, data: action.payload })
}, initialState)
