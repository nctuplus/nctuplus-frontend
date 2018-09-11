
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  data: [],
  status: FETCHING_STATUS.IDLE,
  page: 1,
  maxPage: 1
}

export default handleActions({
  FETCH_USERS_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  FETCH_USERS_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  UPDATE_USERS: (state, action) => ({ ...state, data: action.payload.data, maxPage: action.payload.total_pages }),
  UPDATE_USERS_PAGE: (state, action) => ({ ...state, page: action.payload }),
  RESET_USERS_PAGE: (state) => ({ ...state, page: 1 })
}, initialState)
