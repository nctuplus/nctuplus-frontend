
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchBackgroundsStart = createAction('FETCH_BACKGROUNDS_START')
export const fetchBackgroundsDone = createAction('FETCH_BACKGROUNDS_DONE')
export const updateBackgrounds = createAction('UPDATE_BACKGROUNDS')

export const postBackgroundStart = createAction('POST_BACKGROUND_START')
export const postBackgroundDone = createAction('POST_BACKGROUND_DONE')
export const postBackgroundReset = createAction('POST_BACKGROUND_RESET')

export const fetchBackgrounds = () => dispatch => {
  dispatch(fetchBackgroundsStart())
  fetch(`${SERVER_URL}/api/v1/backgrounds`)
    .then(response => response.json())
    .then(json => {
      dispatch(updateBackgrounds(json))
      dispatch(fetchBackgroundsDone())
    })
    .catch(error => console.log(error))
}

export const postBackground = (payload) => dispatch => {
  dispatch(postBackgroundStart())
  fetch(`${SERVER_URL}/api/v1/backgrounds/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(postBackgroundDone()))
    .catch(error => console.log(error))
}
