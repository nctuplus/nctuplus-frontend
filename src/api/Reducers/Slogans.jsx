
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  index: {
    data: [],
    status: FETCHING_STATUS.IDLE
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
  }
}

export default handleActions({
  SLOGANS: {
    INDEX: {
      SET_STATUS: (state, action) => ({ ...state, index: { ...state.index, status: action.payload } }),
      STORE: (state, action) => ({ ...state, index: { ...state.index, data: action.payload } })
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
    }
  }
}, initialState)
