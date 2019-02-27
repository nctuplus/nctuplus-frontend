
import { createActions } from 'redux-actions'

export default createActions({
  COMMENTS: {
    INDEX: {
      SET_STATUS: null,
      STORE: null,
      UPDATE_PAGE: null,
      UPDATE_FILTERS: null
    },
    SHOW: {
      SET_STATUS: null,
      STORE: null
    },
    NEW: {
      SET_STATUS: null,
      STORE: null
    },
    EDIT: {
      SET_STATUS: null
    },
    DELETE: {
      SET_STATUS: null
    },
    REPLY: {
      NEW: {
        SET_STATUS: null
      },
      EDIT: {
        SET_STATUS: null
      },
      DELETE: {
        SET_STATUS: null
      }
    },
    LATEST_NEWS: {
      SET_STATUS: null,
      STORE: null
    }
  }
})
