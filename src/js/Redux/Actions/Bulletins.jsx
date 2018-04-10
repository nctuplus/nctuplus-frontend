
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchBulletinsStart = createAction('FETCH_BULLETINS_START')
export const fetchBulletinsDone = createAction('FETCH_BULLETINS_DONE')
export const updateBulletins = createAction('UPDATE_BULLETINS')

export const fetchBulletins = () => dispatch => {
  dispatch(fetchBulletinsStart)
  fetch(`${SERVER_URL}/bulletins`)
  .then(response => response.json())
  .then(json => {
    dispatch(updateBulletins(json))
    dispatch(fetchBulletinsDone())
  })
  .catch(error => console.log(error))
}
