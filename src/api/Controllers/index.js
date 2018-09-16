
import axios from 'axios'

// custom instances
export const server = {
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
