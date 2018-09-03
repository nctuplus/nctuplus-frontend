
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  data: {},
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  PATCH_SLOGAN_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  PATCH_SLOGAN_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  PATCH_SLOGAN_RESET: (state) => ({ ...state, status: FETCHING_STATUS.IDLE })
}, initialState)
