
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchSlogansStart = createAction('FETCH_SLOGANS_START')
export const fetchSlogansDone = createAction('FETCH_SLOGANS_DONE')
export const updateSlogans = createAction('UPDATE_SLOGANS')

export const getSloganStart = createAction('GET_SLOGAN_START')
export const storeSlogan = createAction('STORE_SLOGAN')
export const getSloganDone = createAction('GET_SLOGAN_DONE')

export const postSloganStart = createAction('POST_SLOGAN_START')
export const postSloganDone = createAction('POST_SLOGAN_DONE')
export const postSloganReset = createAction('POST_SLOGAN_RESET')

export const patchSloganStart = createAction('PATCH_SLOGAN_START')
export const patchSloganDone = createAction('PATCH_SLOGAN_DONE')
export const patchSloganReset = createAction('PATCH_SLOGAN_RESET')

export const fetchSlogans = () => dispatch => {
  dispatch(fetchSlogansStart())
  fetch(`${SERVER_URL}/api/v1/slogans`)
    .then(response => response.json())
    .then(json => {
      dispatch(updateSlogans(json))
      dispatch(fetchSlogansDone())
    })
    .catch(error => console.log(error))
}

export const getSlogan = (id) => dispatch => {
  dispatch(getSloganStart())
  fetch(`${SERVER_URL}/api/v1/slogans/${id}`)
    .then(response => response.json())
    .then(json => {
      json.created_at = json.created_at.slice(0, 10)
      json.updated_at = json.updated_at.slice(0, 10)
      dispatch(storeSlogan(json))
      dispatch(getSloganDone())
    })
    .catch(error => console.log(error))
}

export const postSlogan = (payload) => dispatch => {
  dispatch(postSloganStart())
  fetch(`${SERVER_URL}/api/v1/slogans/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(postSloganDone()))
    .catch(error => console.log(error))
}

export const patchSlogan = (payload, id) => dispatch => {
  dispatch(patchSloganStart())
  fetch(`${SERVER_URL}/api/v1/slogans/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(patchSloganDone()))
    .catch(error => console.log(error))
}
