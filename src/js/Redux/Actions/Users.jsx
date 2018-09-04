
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchUsersStart = createAction('FETCH_USERS_START')
export const fetchUsersDone = createAction('FETCH_USERS_DONE')
export const updateUsers = createAction('UPDATE_USERS')

export const updateUsersPage = createAction('UPDATE_USERS_PAGE')

export const fetchUsers = (page = 1) => dispatch => {
  dispatch(fetchUsersStart())
  fetch(`${SERVER_URL}/api/v1/users?page=${page}`)
    .then(response => response.json())
    .then(json => {
      dispatch(updateUsers(json))
      dispatch(fetchUsersDone())
    })
    .catch(error => console.log(error))
}
