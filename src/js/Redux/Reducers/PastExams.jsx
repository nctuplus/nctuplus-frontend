
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from '../../constants'

const initialState = {
  data: [],
  status: FETCHING_STATUS.IDLE,
  filter: {},
  page: 1,
  maxPage: 1
}

export default handleActions({
  UPDATE_PAST_EXAM_PAGE: (state, action) => ({ ...state, page: action.payload })
}, initialState)
