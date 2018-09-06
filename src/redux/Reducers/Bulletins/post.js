
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  data: {},
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  POST_BULLETIN_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  POST_BULLETIN_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  POST_BULLETIN_RESET: (state) => ({ ...state, status: FETCHING_STATUS.IDLE })
}, initialState)
