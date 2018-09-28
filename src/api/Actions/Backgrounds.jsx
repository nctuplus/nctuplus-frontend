
import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions'

export const actions = createActions({
  BACKGROUND: {
    FETCH:{
      SET_STATUS:null  //'start','done'
    },
    UPDATE:null,
    POST:{
      SET_STATUS:null  //'start','done','reset'
    }
  }
})

export const fetchBackgrounds = () => dispatch => {
  dispatch(action.background.fetch.setStatus('start'))
  fetch(`${SERVER_URL}/api/v1/backgrounds`)
    .then(response => response.json())
    .then(json => {
      dispatch(action.background.update(json))
      dispatch(action.background.fetch.setStatus('done'))
    })
    .catch(error => console.log(error))
}

export const postBackground = (payload) => dispatch => {
  dispatch(action.background.post.setStatus('start'))
  fetch(`${SERVER_URL}/api/v1/backgrounds/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(action.background.post.setStatus('done')))
    .catch(error => console.log(error))
}
