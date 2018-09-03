
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchBulletinsStart = createAction('FETCH_BULLETINS_START')
export const fetchBulletinsDone = createAction('FETCH_BULLETINS_DONE')
export const updateBulletins = createAction('UPDATE_BULLETINS')

export const getBulletinStart = createAction('GET_BULLETIN_START')
export const storeBulletin = createAction('STORE_BULLETIN')
export const getBulletinDone = createAction('GET_BULLETIN_DONE')

export const postBulletinStart = createAction('POST_BULLETIN_START')
export const postBulletinDone = createAction('POST_BULLETIN_DONE')
export const postBulletinReset = createAction('POST_BULLETIN_RESET')

export const patchBulletinStart = createAction('PATCH_BULLETIN_START')
export const patchBulletinDone = createAction('PATCH_BULLETIN_DONE')
export const patchBulletinReset = createAction('PATCH_BULLETIN_RESET')

export const fetchBulletins = (category = 0) => dispatch => {
  dispatch(fetchBulletinsStart())
  fetch(`${SERVER_URL}/api/v1/bulletins?category=${category}`)
    .then(response => response.json())
    .then(json => {
      dispatch(updateBulletins(json))
      dispatch(fetchBulletinsDone())
    })
    .catch(error => console.log(error))
}

export const getBulletin = (id) => dispatch => {
  dispatch(getBulletinStart())
  fetch(`${SERVER_URL}/api/v1/bulletins/${id}`)
    .then(response => response.json())
    .then(json => {
      json.created_at = json.created_at.slice(0, 10)
      json.updated_at = json.updated_at.slice(0, 10)
      dispatch(storeBulletin(json))
      dispatch(getBulletinDone())
    })
    .catch(error => console.log(error))
}

export const postBulletin = (payload) => dispatch => {
  dispatch(postBulletinStart())
  fetch(`${SERVER_URL}/api/v1/bulletins/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(postBulletinDone()))
    .catch(error => console.log(error))
}

export const patchBulletin = (payload, id) => dispatch => {
  dispatch(patchBulletinStart())
  fetch(`${SERVER_URL}/api/v1/bulletins/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(patchBulletinDone()))
    .catch(error => console.log(error))
}
