
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from '../../constants'

const initialState = {
  status: FETCHING_STATUS.IDLE,
  data: [],
  page: 1,
  max_page: 1024
}

export default handleActions({
  FETCH_COURSES: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  FETCH_COURSES_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  UPDATE_COURSES_PAGE: (state, action) => ({ ...state, page: action.payload })

}, initialState)
