
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  currentUser: null,
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  USER: {
    AUTH: {
      LOGIN: (state, action) => ({ ...state, currentUser: action.payload }),
      LOGOUT: (state) => ({ ...state, currentUser: null }),
      SET_STATUS: (state, action) => ({ ...state, status: action.payload })
    }
  }
}, initialState)
