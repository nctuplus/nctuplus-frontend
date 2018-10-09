
import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions'
import { FETCHING_STATUS as fstat } from 'utilities/constants'

export const actions = createActions({
  COURSE_MAPS: {
    FETCH: {
      SET_STATUS: null,
      UPDATE: null
    },
    GET: {
      SET_STATUS: null,
      STORE: null
    },
    POST: {
      SET_STATUS: null
    },
    PATCH: {
      SET_STATUS: null
    }
  }
})

export const postCourseMapsReset = actions.courseMaps.post.setStatus(fstat.IDLE)
export const patchCourseMapsReset = actions.courseMaps.patch.setStatus(fstat.IDLE)

export const fetchCourseMaps = (category = 0) => dispatch => {
  dispatch(actions.courseMaps.fetch.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/course_maps/`)
    .then(response => response.json())
    .then(json => {
      dispatch(actions.courseMaps.fetch.update(json))
      dispatch(actions.courseMaps.fetch.setStatus(fstat.DONE))
    })
    .catch(error => console.log(error))
}

export const getCourseMap = (id) => dispatch => {
  dispatch(actions.courseMaps.get.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/course_maps/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch(actions.courseMaps.get.store(json))
      dispatch(actions.courseMaps.get.setStatus(fstat.DONE))
    })
    .catch(error => console.log(error))
}

export const postCourseMap = (payload) => dispatch => {
  dispatch(actions.courseMaps.post.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/course_maps/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(actions.courseMaps.post.setStatus(fstat.DONE)))
    .catch(error => console.log(error))
}

export const patchCourseMap = (payload, id) => dispatch => {
  dispatch(actions.courseMaps.patch.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/course_maps/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(actions.courseMaps.patch.setStatus(fstat.FETCHING)))
    .catch(error => console.log(error))
}
