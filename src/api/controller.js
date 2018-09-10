
import axios from 'axios'

// custom instances
// const publicResources = axios.create({ baseURL: SERVER_URL })
const protectedResources = axios.create({ baseURL: SERVER_URL })

// interceptors related to auth
function withTokenInterceptor (request) {
  return request
}
function updateTokenInterceptor (response) {
  return response
}
protectedResources.interceptors.request.use(withTokenInterceptor)
protectedResources.interceptors.response.use(updateTokenInterceptor)

/** *************************
 *  API section            *
 ***************************/

const mockLogin = (user = 'test') => () => {
  const testAccountData = {
    email: 'test@plus.nctu',
    password: 'youshallnotpass'
  }
  const adminAccountData = {
    email: 'admin@plus.nctu',
    password: 'superoowerfulpassword'
  }
  return protectedResources.post(
    '/auth/sign_in',
    user === 'test'
      ? testAccountData
      : adminAccountData
  )
}

export {
  mockLogin
}
