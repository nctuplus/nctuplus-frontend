
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchDiscussesStart = createAction('FETCH_DISCUSSES_START')
export const fetchDiscussesDone = createAction('FETCH_DISCUSSES_DONE')
export const updateDiscussesPage = createAction('UPDATE_DISCUSSES_PAGE')
export const updateDiscusses = createAction('UPDATE_DISCUSSES')

export const fetchDiscusses = () => dispatch => {
  dispatch(fetchDiscussesStart)
  fetch(`${SERVER_URL}/discusses`)
  .then(response => response.json())
  .then(json => {
    dispatch(updateDiscusses(json))
    dispatch(fetchDiscussesDone())
  })
  .catch(error => console.log(error))
}
