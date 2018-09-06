
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  status: FETCHING_STATUS.IDLE,
  data: {}
}

export default handleActions({
  COURSES: {
    SHOW: {
      STATUS: {
        START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
        DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE })
      },
      STORE: (state, action) => ({ ...state, data: action.payload })
    }
  }
}, initialState)
