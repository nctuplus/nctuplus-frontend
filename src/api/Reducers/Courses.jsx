
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  index: {
    status: FETCHING_STATUS.IDLE,
    data: [],
    page: 1,
    maxPage: 1
  },
  show: {
    status: FETCHING_STATUS.IDLE,
    data: {}
  }
}

export default handleActions({
  COURSES: {
    INDEX: {
      SET_STATUS: (state, action) => ({ ...state, index: { ...state.index, status: action.payload } }),
      STORE: (state, action) => {
        const { data, current_page: page, total_pages: maxPage } = action.payload
        return { ...state, index: { ...state.index, data, page, maxPage } }
      },
      UPDATE_PAGE: (state, action) => ({ ...state, index: { ...state.index, page: action.payload } })
    },
    SHOW: {
      SET_STATUS: (state, action) => ({ ...state, show: { ...state.show, status: action.payload } }),
      STORE: (state, action) => ({ ...state, show: { ...state.show, data: action.payload } })
    }
  }
}, initialState)
