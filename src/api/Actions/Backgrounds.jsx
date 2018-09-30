import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

export const actions = createActions({
  BACKGROUND: {
    FETCH:{
      SET_STATUS:null  //FETCHING_STATUS.FETCHING, DONE
    },
    UPDATE:null,
    POST:{
      SET_STATUS:null  //FETCHING_STATUS.FETCHING, DONE, IDLE
    }
  }
})

export const fetchBackgrounds = () => dispatch => {
  dispatch(action.background.fetch.setStatus(FETCHING_STATUS.START))
  fetch(`${SERVER_URL}/api/v1/backgrounds`)
    .then(response => response.json())
    .then(json => {
      dispatch(action.background.update(json))
      dispatch(action.background.fetch.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(error => console.log(error))
}

export const postBackground = (payload) => dispatch => {
  dispatch(action.background.post.setStatus(FETCHING_STATUS.START))
  fetch(`${SERVER_URL}/api/v1/backgrounds/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(action.background.post.setStatus(FETCHING_STATUS.DONE)))
    .catch(error => console.log(error))
}
