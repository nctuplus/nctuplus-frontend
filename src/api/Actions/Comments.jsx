
import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions'
import { FETCHING_STATUS as fstat } from 'utilities/constants'

export const actions = createActions({
  COMMENTS: {
    FETCH: {
      SET_STATUS: null,
      UPDATE: null,
      UPDATE_PAGE: null
    },
    GET: {
      SET_STATUS: null,
      STORE: null
    }
  }
})

export const fetchComments = (page = 1) => dispatch => {
  dispatch(actions.comments.fetch.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/comments?_limit=30&_page=${page}`)
    .then(response => response.json())
    .then(json => {
      dispatch(actions.comments.fetch.update(json))
      dispatch(actions.comments.fetch.setStatus(fstat.DONE))
    })
    .catch(error => console.log(error))
}

export const getComment = (id) => dispatch => {
  dispatch(actions.comments.get.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/comments/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch(actions.comments.get.store(json))
      dispatch(actions.comments.get.setStatus(fstat.DONE))
    })
    .catch(error => console.log(error))
}
