
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchCourseMapsStart = createAction('FETCH_COURSE_MAPS_START')
export const fetchCourseMapsDone = createAction('FETCH_COURSE_MAPS_DONE')
export const updateCourseMaps = createAction('UPDATE_COURSE_MAPS')

export const getCourseMapStart = createAction('GET_COURSE_MAP_START')
export const storeCourseMap = createAction('STORE_COURSE_MAP')
export const getCourseMapDone = createAction('GET_COURSE_MAP_DONE')

export const postCourseMapStart = createAction('POST_COURSE_MAP_START')
export const postCourseMapDone = createAction('POST_COURSE_MAP_DONE')
export const postCourseMapReset = createAction('POST_COURSE_MAP_RESET')

export const patchCourseMapStart = createAction('PATCH_COURSE_MAP_START')
export const patchCourseMapDone = createAction('PATCH_COURSE_MAP_DONE')
export const patchCourseMapReset = createAction('PATCH_COURSE_MAP_RESET')

export const fetchCourseMaps = (category = 0) => dispatch => {
  dispatch(fetchCourseMapsStart())
  fetch(`${SERVER_URL}/api/v1/course_maps/`)
    .then(response => response.json())
    .then(json => {
      dispatch(updateCourseMaps(json))
      dispatch(fetchCourseMapsDone())
    })
    .catch(error => console.log(error))
}

export const getCourseMap = (id) => dispatch => {
  dispatch(getCourseMapStart())
  fetch(`${SERVER_URL}/api/v1/course_maps/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch(storeCourseMap(json))
      dispatch(getCourseMapDone())
    })
    .catch(error => console.log(error))
}

export const postCourseMap = (payload) => dispatch => {
  dispatch(postCourseMapStart())
  fetch(`${SERVER_URL}/api/v1/course_maps/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(postCourseMapDone()))
    .catch(error => console.log(error))
}

export const patchCourseMap = (payload, id) => dispatch => {
  dispatch(patchCourseMapStart())
  fetch(`${SERVER_URL}/api/v1/course_maps/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(patchCourseMapDone()))
    .catch(error => console.log(error))
}
