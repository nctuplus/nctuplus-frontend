
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  currentUser: null,
  status: FETCHING_STATUS.IDLE,
  past_course: {
    data: {},
    status: FETCHING_STATUS.IDLE
  },
  gpa: {
    data: {},
    status: FETCHING_STATUS.IDLE
  },
  friend: {
    show: {
      data: {},
      status: FETCHING_STATUS.IDLE
    },
    new: {
      data: {},
      status: FETCHING_STATUS.IDLE
    },
    invite: {
      data: {},
      status: FETCHING_STATUS.IDLE
    }
  }
}

export default handleActions({
  USER: {
    AUTH: {
      LOGIN: (state, action) => ({ ...state, currentUser: action.payload }),
      LOGOUT: (state) => ({ ...state, currentUser: null }),
      SET_STATUS: (state, action) => ({ ...state, status: action.payload })
    },
    PAST_COURSE: {
      SHOW: {
        SET_STATUS: (state, action) => ({ ...state, past_course: { ...state.past_course, status: action.payload } }),
        STORE: (state, action) => ({ ...state, past_course: { ...state.past_course, data: action.payload } })
      }
    },
    GPA: {
      SHOW: {
        SET_STATUS: (state, action) => ({ ...state, gpa: { ...state.gpa, status: action.payload } }),
        STORE: (state, action) => ({ ...state, gpa: { ...state.gpa, data: action.payload } })
      }
    },
    FRIEND: {
      SHOW: {
        SET_STATUS: (state, action) => ({ ...state, friend: { ...state.friend, show: { ...state.friend.show, status: action.payload } } }),
        STORE: (state, action) => ({ ...state, friend: { ...state.friend, show: { ...state.friend.show, data: action.payload } } })
      },
      NEW: {
        SET_STATUS: (state, action) => ({ ...state, friend: { ...state.friend, new: { ...state.friend.new, status: action.payload } } }),
        STORE: (state, action) => ({ ...state, friend: { ...state.friend, new: { ...state.friend.new, data: action.payload } } })
      },
      INVITE: {
        SET_STATUS: (state, action) => ({ ...state, friend: { ...state.friend, invite: { ...state.friend.invite, status: action.payload } } }),
        STORE: (state, action) => ({ ...state, friend: { ...state.friend, invite: { ...state.friend.invite, data: action.payload } } })
      }
    }
  }
}, initialState)
