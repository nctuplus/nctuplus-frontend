
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  status: FETCHING_STATUS.IDLE,
  data: [],
  page: 1,
  max_page: 1
}

export default handleActions({
  FETCH_COMMENTS_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  FETCH_COMMENTS_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  UPDATE_COMMENTS_PAGE: (state, action) => ({ ...state, page: action.payload }),
  UPDATE_COMMENTS: (state, action) => ({ ...state, data: action.payload })

}, initialState)
