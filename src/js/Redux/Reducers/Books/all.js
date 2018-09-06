
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from '../../../constants'

const initialState = {
  data: [],
  status: FETCHING_STATUS.IDLE,
  page: 1,
  maxPage: 1,
  filters: {
    sort_by: 'date',
    descend: true
  }
}

export default handleActions({
  FETCH_BOOKS_START: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  FETCH_BOOKS_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  UPDATE_BOOKS_PAGE: (state, action) => ({ ...state, page: action.payload }),
  UPDATE_BOOKS: (state, action) => ({ ...state, data: action.payload.data, maxPage: action.payload.total_pages }),
  APPLY_BOOKS_FILTERS: (state, action) => ({ ...state, filters: { ...state.filters, ...action.payload } }),
  RESET_BOOKS_FILTERS: (state) => ({ ...state, filters: initialState.filters })
}, initialState)
