
import actions from 'api/Actions/CourseMaps'
import { server } from 'api/Controllers'
import { FETCHING_STATUS } from 'utilities/constants'

export const fetchCourseMaps = () => dispatch => {
  dispatch(actions.courseMaps.index.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get('/api/v1/course_maps')
    .then(({ data: courseMaps }) => {
      dispatch(actions.courseMaps.index.store(courseMaps))
      dispatch(actions.courseMaps.index.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.courseMaps.index.setStatus(FETCHING_STATUS.FAIL)))
}

export const getCourseMap = (id) => dispatch => {
  dispatch(actions.courseMaps.show.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/course_maps/${id}`)
    .then(({ data: courseMap }) => {
      dispatch(actions.courseMaps.show.store(courseMap))
      dispatch(actions.courseMaps.show.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.courseMaps.show.setStatus(FETCHING_STATUS.FAIL)))
}

export const postCourseMap = (payload) => dispatch => {
  dispatch(actions.courseMaps.new.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .post('/api/v1/course_maps/', payload)
    .then(() => dispatch(actions.courseMaps.new.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.courseMaps.new.setStatus(FETCHING_STATUS.FAIL)))
}

export const patchCourseMap = (payload, id) => dispatch => {
  dispatch(actions.courseMaps.edit.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .patch(`/api/v1/course_maps/${id}`, payload)
    .then(() => dispatch(actions.courseMaps.edit.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.courseMaps.edit.setStatus(FETCHING_STATUS.FAIL)))
}
