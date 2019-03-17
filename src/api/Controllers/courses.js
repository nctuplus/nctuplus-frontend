
import actions from 'api/Actions/Courses'
import { server } from 'api/Controllers'
import { FETCHING_STATUS } from 'utilities/constants'

export const getCourses = (page = 1) => dispatch => {
  dispatch(actions.courses.index.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/courses?page=${page}`)
    .then(({ data: courses }) => {
      dispatch(actions.courses.index.store(courses))
      dispatch(actions.courses.index.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.courses.index.setStatus(FETCHING_STATUS.FAIL)))
}

export const getCourse = (id) => dispatch => {
  dispatch(actions.courses.show.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/courses/${id}`)
    .then(({ data: course }) => {
      dispatch(actions.courses.show.store(course))
      dispatch(actions.courses.show.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.courses.show.setStatus(FETCHING_STATUS.FAIL)))
}

export const getSearchCourses = (payload) => dispatch => {
  dispatch(actions.courses.search.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .post('/api/v1/courses/applicable_courses', payload)
    .then(({ data: courses }) => {
      dispatch(actions.courses.search.store(courses))
      dispatch(actions.courses.search.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.courses.search.setStatus(FETCHING_STATUS.FAIL)))
}
