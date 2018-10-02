
import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions'
import { FETCHING_STATUS as fstat } from 'utilities/constants'

export const actions = createActions({
  BULLETINS:{
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


export const fetchBulletins = (category = 0) => dispatch => {
  dispatch(actions.bulletins.fetch.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/bulletins?category=${category}`)
    .then(response => response.json())
    .then(json => {
      dispatch(actions.bulletins.fetch.update(json))
      dispatch(actions.bulletins.fetch.setStatus(fstat.DONE))
    })
    .catch(error => console.log(error))
}

export const getBulletin = (id) => dispatch => {
  dispatch(actions.bulletins.get.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/bulletins/${id}`)
    .then(response => response.json())
    .then(json => {
      json.created_at = json.created_at.slice(0, 10)
      json.updated_at = json.updated_at.slice(0, 10)
      dispatch(actions.bulletins.get.store(json))
      dispatch(actions.bulletins.get.setStatus(fstat.DONE))
    })
    .catch(error => console.log(error))
}

export const postBulletin = (payload) => dispatch => {
  dispatch(actions.bulletins.post.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/bulletins/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(actions.bulletins.post.setStatus(fstat.DONE)))
    .catch(error => console.log(error))
}

export const patchBulletin = (payload, id) => dispatch => {
  dispatch(actions.bulletins.patch.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/bulletins/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(actions.bulletins.patch.setStatus(fstat.DONE)))
    .catch(error => console.log(error))
}
