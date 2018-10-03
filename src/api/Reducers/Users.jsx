
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  data: [],
  status: FETCHING_STATUS.IDLE,
  page: 1,
  maxPage: 1
}

export default handleActions({
  USERS:{
    FETCH:{
      SET_STATUS:(state, action) => ({ ...state, status: action.payload }),
      UPDATE:(state, action) => ({ ...state, data: action.payload.data, maxPage: action.payload.total_pages })
    },
    SET_PAGE:(state, action) => ({ ...state, page: action.payload }),
  }
}, initialState)
