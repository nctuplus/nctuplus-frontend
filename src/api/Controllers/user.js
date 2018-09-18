
import actions from 'api/Actions/User'
import server from 'api/Controllers'
import { getFollowEvents } from './events'
import { FETCHING_STATUS } from 'utilities/constants'

// fetch all user related data while logging in
export const getAllUserData = () => dispatch => {
  dispatch(getFollowEvents())
}

export const login = data => dispatch =>
  server.protected
    .post('/auth/sign_in', data)
    .then(({ data: user }) => {
      dispatch(actions.user.auth.login(user.data))
      dispatch(getAllUserData())
    })
    .catch(() => dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FAIL)))

export const logout = () => dispatch =>
  server.protected
    .delete('/auth/sign_out')
    .then(() => dispatch(actions.user.auth.logout()))
    .catch(() => dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FAIL)))

export const validateToken = () => dispatch => {
  const storage = window.localStorage
  const token = storage.getItem('token')
  const client = storage.getItem('client')
  const uid = storage.getItem('uid')
  const config = { params: { 'access-token': token, client, uid } }
  if (token && uid && client) {
    server.protected
      .get('/auth/validate_token', config)
      .then(({ data: user }) => {
        dispatch(actions.user.auth.login(user.data))
        dispatch(getAllUserData())
      })
      .catch(() => dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FAIL)))
  }
}
