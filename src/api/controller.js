
import axios from 'axios'
import actions from 'api/Actions/User'
import eventActions from 'api/Actions/Events'
import { FETCHING_STATUS } from 'utilities/constants'

// custom instances
const server = {
  public: axios.create({ baseURL: SERVER_URL }),
  protected: axios.create({ baseURL: SERVER_URL })
}

// interceptors related to auth
function withTokenInterceptor (request) {
  const storage = window.localStorage
  const token = storage.getItem('token', null)
  const client = storage.getItem('client', null)
  const uid = storage.getItem('uid', null)
  request.headers = { ...request.headers, 'access-token': token, client, uid }
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
server.protected.interceptors.request.use(withTokenInterceptor)
server.protected.interceptors.response.use(updateTokenInterceptor)

/** *************************
 *  API section            *
 ***************************/

const login = data => dispatch =>
  server.protected
    .post('/auth/sign_in', data)
    .then(({ data: user }) => dispatch(actions.user.auth.login(user.data)))
    .catch(() => dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FAIL)))

const logout = () => dispatch =>
  server.protected
    .delete('/auth/sign_out')
    .then(() => dispatch(actions.user.auth.logout()))
    .catch(() => dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FAIL)))

const validateToken = () => dispatch => {
  const storage = window.localStorage
  const token = storage.getItem('token')
  const client = storage.getItem('client')
  const uid = storage.getItem('uid')
  const config = { params: { 'access-token': token, client, uid } }
  if (token && uid && client) {
    server.protected
      .get('/auth/validate_token', config)
      .then(({ data: user }) => dispatch(actions.user.auth.login(user.data)))
      .catch(() => dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FAIL)))
  }
}

export const fetchEvents = (page = 1) => dispatch => {
  dispatch(eventActions.events.index.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/events?page=${page}`)
    .then(({ data: events }) => {
      dispatch(eventActions.events.index.store(events))
      dispatch(eventActions.events.index.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(eventActions.events.index.setStatus(FETCHING_STATUS.FAIL)))
}

export const getEvent = (id) => dispatch => {
  dispatch(eventActions.events.show.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/events/${id}`)
    .then(({ data: event }) => {
      event.begin_time = event.begin_time.slice(0, 10)
      event.end_time = event.end_time.slice(0, 10)
      dispatch(eventActions.events.show.store(event))
      dispatch(eventActions.events.show.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(eventActions.events.show.setStatus(FETCHING_STATUS.FAIL)))
}

export const postEvent = (payload) => dispatch => {
  dispatch(eventActions.events.new.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .post('/api/v1/events/', payload)
    .then(({ data: event }) => {
      dispatch(eventActions.events.new.store(event))
      dispatch(eventActions.events.new.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(eventActions.events.new.setStatus(FETCHING_STATUS.FAIL)))
}

export const patchEvent = (payload, id) => dispatch => {
  dispatch(eventActions.events.edit.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .patch(`/api/v1/events/${id}`, payload)
    .then(({ data: event }) => dispatch(eventActions.events.edit.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(eventActions.events.edit.setStatus(FETCHING_STATUS.FAIL)))
}

export const deleteEvent = (id) => dispatch => {
  dispatch(eventActions.events.delete.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .delete(`/api/v1/events/${id}`)
    .then(({ data: event }) => dispatch(eventActions.events.delete.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(eventActions.events.delete.setStatus(FETCHING_STATUS.FAIL)))
}

export const fetchFollowEvents = () => dispatch => {
  dispatch(eventActions.events.follow.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get('/api/v1/my/events')
    .then(({ data: events }) => {
      dispatch(eventActions.events.follow.store(events))
      dispatch(eventActions.events.follow.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(eventActions.events.follow.setStatus(FETCHING_STATUS.FAIL)))
}

export { login, logout, validateToken }
