
import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions'

const courses = createActions({
  COURSES: {
    INDEX: {
      STATUS: {
        START: null,
        DONE: null,
        FAIL: null
      },
      STORE: null
    },
    SHOW: {
      STATUS: {
        START: null,
        DONE: null,
        FAIL: null
      },
      STORE: null
    },

    UPDATE_PAGE: null
  }
})

const courseActions = courses.courses

courseActions.index.fetch = (page = 1) => dispatch => {
  dispatch(courseActions.index.status.start())
  fetch(`${SERVER_URL}/api/v1/courses?_limit=30&_page=${page}`)
    .then(response => response.json())
    .then(json => {
      dispatch(courseActions.index.store(json))
      dispatch(courseActions.index.status.done())
    })
    .catch(error => console.log(error))
}

courseActions.show.fetch = (id) => dispatch => {
  dispatch(courseActions.show.status.start())
  fetch(`${SERVER_URL}/api/v1/courses/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch(courseActions.show.store(json))
      dispatch(courseActions.show.status.done())
    })
    .catch(error => console.log(error))
}

export default courseActions
