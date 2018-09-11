
import axios from 'axios'
import actions from 'api/Actions/User'
import { FETCHING_STATUS } from 'utilities/constants'

// custom instances
const server = {
  public: axios.create({ baseURL: SERVER_URL }),
  protected: axios.create({ baseURL: SERVER_URL })
}

// interceptors related to auth
function withTokenInterceptor (request) {
  return request
}
function updateTokenInterceptor (response) {
  const token = response.headers['access-token']
  const client = response.headers['client']
  const uid = response.headers['uid']
  if (token && uid && client) {
    const storage = window.localStorage
    storage.setItem('token', token)
    storage.setItem('client', client)
    storage.setItem('uid', uid)
  }
  return response
}
server.public.interceptors.request.use(withTokenInterceptor)
server.protected.interceptors.response.use(updateTokenInterceptor)

/** *************************
 *  API section            *
 ***************************/

const login = data => dispatch =>
  server.protected
    .post('/auth/sign_in', data)
    .then(({ data: userData }) => dispatch(actions.user.auth.login(userData)))
    .catch(() => dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FAIL)))

export {
  login
}
