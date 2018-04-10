
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchCoursesStart = createAction('FETCH_COURSES_START')
export const fetchCoursesDone = createAction('FETCH_COURSES_DONE')
export const updateCourses = createAction('UPDATE_COURSES')
export const updateCoursesPage = createAction('UPDATE_COURSES_PAGE')

export const fetchCourses = () => dispatch => {
  dispatch(fetchCoursesStart)
  fetch(`${SERVER_URL}/courses`)
  .then(response => response.json())
  .then(json => {
    dispatch(updateCourses(json))
    dispatch(fetchCoursesDone())
  })
  .catch(error => console.log(error))
}
