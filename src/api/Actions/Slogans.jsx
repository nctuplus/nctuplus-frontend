
import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions'
import { FETCHING_STATUS as fstat } from 'utilities/constants'

export const actions = createActions({
  SLOGANS:{
    FETCH:{
      SET_STATUS:null,
      UPDATE:null
    },
    GET:{
      SET_STATUS:null,
      STORE:null
    },
    POST:{
      SET_STATUS:null
    },
    PATCH:{
      SET_STATUS:null
    }
  }
});

export const postSloganReset = actions.slogans.post.setStatus(fstat.IDLE)
export const patchSloganReset = actions.slogans.patch.setStatus(fstat.IDLE)

export const fetchSlogans = () => dispatch => {
  dispatch(actions.slogans.fetch.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/slogans`)
    .then(response => response.json())
    .then(json => {
      dispatch(actions.slogans.fetch.update(json))
      dispatch(actions.slogans.fetch.setStatus(fstat.DONE))
    })
    .catch(error => console.log(error))
}

export const getSlogan = (id) => dispatch => {
  dispatch(actions.slogans.get.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/slogans/${id}`)
    .then(response => response.json())
    .then(json => {
      json.created_at = json.created_at.slice(0, 10)
      json.updated_at = json.updated_at.slice(0, 10)
      dispatch(actions.slogans.get.store(json))
      dispatch(actions.slogans.get.setStatus(fstat.DONE))
    })
    .catch(error => console.log(error))
}

export const postSlogan = (payload) => dispatch => {
  dispatch(actions.slogans.post.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/slogans/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(actions.slogans.post.setStatus(fstat.DONE)))
    .catch(error => console.log(error))
}

export const patchSlogan = (payload, id) => dispatch => {
  dispatch(actions.slogans.patch.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/slogans/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(actions.slogans.patch.setStatus(fstat.DONE)))
    .catch(error => console.log(error))
}
