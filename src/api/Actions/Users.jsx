
import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions'
import { FETCHING_STATUS as fstat } from 'utilities/constants'

export const actions = createActions({
  USERS: {
    FETCH: {
      SET_STATUS: null,
      UPDATE: null
    },
    SET_PAGE: null
  }
})

export const updateUsersPage = page => actions.users.setPage(page)
export const resetUsersPage = actions.users.setPage(1)

export const fetchUsers = (page = 1) => dispatch => {
  dispatch(actions.users.fetch.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/users?page=${page}`)
    .then(response => response.json())
    .then(json => {
      dispatch(actions.users.fetch.update(json))
      dispatch(actions.users.fetch.setStatus(fstat.DONE))
    })
    .catch(error => console.log(error))
}
