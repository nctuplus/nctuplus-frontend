
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'constants'

const initialState = {
  data: {},
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  POST_BOOK_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  POST_BOOK_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  POST_BOOK_RESET: (state) => ({ ...state, status: FETCHING_STATUS.IDLE })
}, initialState)
