
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  index: {
    data: [],
    status: FETCHING_STATUS.IDLE,
    page: 1,
    maxPage: 1,
    filters: {
      search_by: ''
    }
  }
}

export default handleActions({
  USERS: {
    INDEX: {
      SET_STATUS: (state, action) => ({ ...state, status: action.payload }),
      STORE: (state, action) => {
        const { data, current_page: page, total_pages: maxPage } = action.payload
        return { ...state, index: { ...state.index, data, page, maxPage } }
      },
      UPDATE_PAGE: (state, action) => ({ ...state, index: { ...state.index, page: action.payload } }),
      UPDATE_FILTERS: (state, action) => ({ ...state, index: { ...state.index, filters: { ...state.index.filters, ...action.payload } } })
    }
  }
}, initialState)
