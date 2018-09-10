
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  data: [],
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  FETCH_SLOGANS_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  UPDATE_SLOGANS: (state, action) => ({ ...state, data: action.payload }),
  FETCH_SLOGANS_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE })
}, initialState)
