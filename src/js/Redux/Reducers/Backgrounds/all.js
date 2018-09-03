
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from '../../../constants'

const initialState = {
  data: [],
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  FETCH_BACKGROUNDS_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  UPDATE_BACKGROUNDS: (state, action) => ({ ...state, data: action.payload }),
  FETCH_BACKGROUNDS_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE })
}, initialState)
