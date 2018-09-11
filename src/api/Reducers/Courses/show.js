
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  status: FETCHING_STATUS.IDLE,
  data: {}
}

export default handleActions({
  COURSES: {
    SHOW: {
      SET_STATUS: (state, action) => ({ ...state, status: action.payload }),
      SET_CURRENT: (state, action) => ({ ...state, data: action.payload })
    }
  }
}, initialState)
