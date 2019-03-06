
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
  },
  show: {
    data: {},
    status: FETCHING_STATUS.IDLE
  },
  new: {
    data: {},
    status: FETCHING_STATUS.IDLE
  },
  edit: {
    status: FETCHING_STATUS.IDLE
  },
  delete: {
    status: FETCHING_STATUS.IDLE
  },
  follow: {
    data: [],
    status: FETCHING_STATUS.IDLE
  }
}

export default handleActions({
  EVENTS: {
    INDEX: {
      SET_STATUS: (state, action) => ({ ...state, index: { ...state.index, status: action.payload } }),
      STORE: (state, action) => {
        const { data, current_page: page, total_pages: maxPage } = action.payload
        return { ...state, index: { ...state.index, data, page, maxPage } }
      },
      UPDATE_PAGE: (state, action) => ({ ...state, index: { ...state.index, page: action.payload } }),
      UPDATE_FILTERS: (state, action) => ({ ...state, index: { ...state.index, filters: { ...state.index.filters, ...action.payload } } })
    },
    SHOW: {
      SET_STATUS: (state, action) => ({ ...state, show: { ...state.show, status: action.payload } }),
      STORE: (state, action) => ({ ...state, show: { ...state.show, data: action.payload } })
    },
    NEW: {
      SET_STATUS: (state, action) => ({ ...state, new: { ...state.new, status: action.payload } }),
      STORE: (state, action) => ({ ...state, new: { ...state.new, data: action.payload } })
    },
    EDIT: {
      SET_STATUS: (state, action) => ({ ...state, edit: { ...state.edit, status: action.payload } })
    },
    DELETE: {
      SET_STATUS: (state, action) => ({ ...state, delete: { ...state.delete, status: action.payload } })
    },
    FOLLOW: {
      SET_STATUS: (state, action) => ({ ...state, follow: { ...state.follow, status: action.payload } }),
      STORE: (state, action) => ({ ...state, follow: { ...state.follow, data: action.payload } })
    }
  }
}, initialState)
