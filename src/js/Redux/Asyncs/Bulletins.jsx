
import fetch from 'isomorphic-fetch'
import { fetchBulletins, fetchBulletinsDone, updateBulletins } from '../Actions/Bulletins'

export const asyncFetchBulletins = () => dispatch => {
  dispatch(fetchBulletins)
  fetch(`${SERVER_URL}/bulletins`)
  .then(response => response.json())
  .then(json => {
    dispatch(updateBulletins(json))
    dispatch(fetchBulletinsDone())
  })
  .catch(error => console.log(error))
}
