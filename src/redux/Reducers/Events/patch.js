
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  data: {},
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  PATCH_BULLETIN_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  PATCH_BULLETIN_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  PATCH_BULLETIN_RESET: (state) => ({ ...state, status: FETCHING_STATUS.IDLE })
}, initialState)
