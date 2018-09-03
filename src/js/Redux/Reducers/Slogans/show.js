
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from '../../../constants'

const initialState = {
  data: {},
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  GET_SLOGAN_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  GET_SLOGAN_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  STORE_SLOGAN: (state, action) => ({ ...state, data: action.payload })
}, initialState)
