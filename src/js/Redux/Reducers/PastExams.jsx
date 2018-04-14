
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from '../../constants'

const initialState = {
  data: [],
  status: FETCHING_STATUS.IDLE,
  filter: {},
  page: 1,
  maxPage: 1
}

export default handleActions({
  FETCH_PAST_EXAMS_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  FETCH_PAST_EXAMS_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  UPDATE_PAST_EXAMS_PAGE: (state, action) => ({ ...state, page: action.payload }),
  UPDATE_PAST_EXAMS: (state, action) => ({ ...state, data: action.payload })
}, initialState)
