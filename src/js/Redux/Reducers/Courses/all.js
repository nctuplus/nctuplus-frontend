
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from '../../../constants'

const initialState = {
  status: FETCHING_STATUS.IDLE,
  data: [],
  page: 1,
  maxPage: 1
}

export default handleActions({
  COURSES: {
    INDEX: {
      STATUS: {
        START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
        DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE })
      },
      STORE: (state, action) => ({ ...state, data: action.payload }),
      UPDATE_PAGE: (state, action) => ({ ...state, page: action.payload })
    }
  }
}, initialState)
