
import { handleActions } from 'redux-actions'

const initialState = {
  college: null
}

export default handleActions({
  SEARCH_PANEL: {
    UPDATE_COLLEGE: (state, action) => ({ ...state, college: action.payload })
  }
}, initialState)
