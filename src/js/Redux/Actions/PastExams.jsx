
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchPastExamsStart = createAction('FETCH_PAST_EXAMS_START')
export const fetchPastExamsDone = createAction('FETCH_PAST_EXAMS_DONE')
export const updatePastExamsPage = createAction('UPDATE_PAST_EXAMS_PAGE')
export const updatePastExams = createAction('UPDATE_PAST_EXAMS')

export const fetchPastExams = () => dispatch => {
  dispatch(fetchPastExamsStart)
  fetch(`${SERVER_URL}/past_exams`)
  .then(response => response.json())
  .then(json => {
    dispatch(updatePastExams(json))
    dispatch(fetchPastExamsDone())
  })
  .catch(error => console.log(error))
}
