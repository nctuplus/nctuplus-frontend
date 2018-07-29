
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchPastExamsStart = createAction('FETCH_PAST_EXAMS_START')
export const fetchPastExamsDone = createAction('FETCH_PAST_EXAMS_DONE')
export const updatePastExams = createAction('UPDATE_PAST_EXAMS')

export const updatePastExamsPage = createAction('UPDATE_PAST_EXAMS_PAGE')

export const fetchPastExams = (page = 1) => dispatch => {
  dispatch(fetchPastExamsStart)
  fetch(`${SERVER_URL}/past_exams?_limit=30&_page=${page}`)
    .then(response => response.json())
    .then(json => {
      dispatch(updatePastExams(json))
      dispatch(fetchPastExamsDone())
    })
    .catch(error => console.log(error))
}
