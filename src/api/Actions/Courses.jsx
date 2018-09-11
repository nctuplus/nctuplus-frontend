
import { FETCHING_STATUS } from 'utilities/constants'
import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions'

const actions = createActions({
  COURSES: {
    INDEX: {
      SET_STATUS: null,
      STORE: null,
      UPDATE_PAGE: null
    },
    SHOW: {
      SET_STATUS: null,
      SET_CURRENT: null
    }
  }
})

const courseActions = actions.courses

courseActions.index.fetch = (page = 1) => dispatch => {
  dispatch(courseActions.index.setStatus(FETCHING_STATUS.FETCHING))
  fetch(`${SERVER_URL}/api/v1/courses?page=${page}`)
    .then(response => response.json())
    .then(json => {
      dispatch(courseActions.index.store(json))
      dispatch(courseActions.index.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(courseActions.index.setStatus(FETCHING_STATUS.FAIL)))
}

courseActions.show.fetch = (id) => dispatch => {
  dispatch(courseActions.show.setStatus(FETCHING_STATUS.FETCHING))
  fetch(`${SERVER_URL}/api/v1/courses/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch(courseActions.show.setCurrent(json))
      dispatch(courseActions.show.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(courseActions.show.setStatus(FETCHING_STATUS.FAIL)))
}

export default courseActions
