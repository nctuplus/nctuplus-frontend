
import { createActions } from 'redux-actions'

export default createActions({
  USER: {
    AUTH: {
      LOGIN: null,
      LOGOUT: null,
      SET_STATUS: null
    },
    PAST_COURSE: {
      SHOW: {
        SET_STATUS: null,
        STORE: null
      }
    },
    GPA: {
      SHOW: {
        SET_STATUS: null,
        STORE: null
      }
    },
    FRIEND: {
      SHOW: {
        SET_STATUS: null,
        STORE: null
      },
      NEW: {
        SET_STATUS: null,
        STORE: null
      },
      INVITE: {
        SET_STATUS: null,
        STORE: null
      }
    }
  }
})
