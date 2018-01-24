
import 'isomorphic-fetch'
import { dispatch } from 'redux'
import { fetch_bulletins, fetch_bulletins_done, update_bulletins } from '../Actions/Bulletins'

export const async_fetch_bulletins = () => dispatch => {
  dispatch(fetch_bulletins)
  fetch(`${SERVER_URL}/bulletins`)
  .then(response => response.json())
  .then(json => {
    dispatch(update_bulletins(json))
    dispatch(fetch_bulletins_done())
  })
  .catch(error => console.log(error))
}
