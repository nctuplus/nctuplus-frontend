
import { handleActions } from 'redux-actions'

const initialState = {
  userID: '0000', // for test
  shareable: false,
  isLogin: false
}

export default handleActions({
  SHAREABLE_TOGGLE: (state, action) => ({ ...state, shareable: !state.shareable }),
  LOGIN_OR_LOGOUT: (state, action) => ({ ...state, isLogin: !state.isLogin })
}, initialState)
