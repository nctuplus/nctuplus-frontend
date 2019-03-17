
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  index: {
    data: [],
    status: FETCHING_STATUS.IDLE,
    filter: { search_by: '' },
    page: 1,
    maxPage: 1
  },
  new: {
    status: FETCHING_STATUS.IDLE
  },
  delete: {
    status: FETCHING_STATUS.IDLE
  },
  latestNews: {
    data: [],
    status: FETCHING_STATUS.IDLE
  }
}

export default handleActions({
  PAST_EXAMS: {
    INDEX: {
      SET_STATUS: (state, action) => ({ ...state, index: { ...state.index, status: action.payload } }),
      STORE: (state, action) => {
        const { data, current_page: page, total_pages: maxPage } = action.payload
        return { ...state, index: { ...state.index, data, page, maxPage } }
      },
      UPDATE_PAGE: (state, action) => ({ ...state, index: { ...state.index, page: action.payload } }),
      UPDATE_FILTERS: (state, action) => ({ ...state, index: { ...state.index, filter: { ...state.index.filters, ...action.payload } } })
    },
    NEW: {
      SET_STATUS: (state, action) => ({ ...state, new: { ...state.new, status: action.payload } })
    },
    DELETE: {
      SET_STATUS: (state, action) => ({ ...state, delete: { ...state.delete, status: action.payload } })
    },
    LATEST_NEWS: {
      SET_STATUS: (state, action) => ({ ...state, latestNews: { ...state.latestNews, status: action.payload } }),
      STORE: (state, action) => ({ ...state, latestNews: { ...state.latestNews, data: action.payload.data } })
    }
  }
}, initialState)
