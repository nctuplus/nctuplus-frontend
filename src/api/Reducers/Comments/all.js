
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  status: FETCHING_STATUS.IDLE,
  data: [],
  page: 1,
  maxPage: 1
}

export default handleActions({
  COMMENTS:{
    FETCH:{
      SET_STATUS:(state, action) => ({ ...state, status: action.payload }),
      UPDATE:(state, action) => ({ ...state, data: action.payload }),
      UPDATE_PAGE:(state, action) => ({ ...state, page: action.payload })
    },
  }

}, initialState)
