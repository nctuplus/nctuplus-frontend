
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchEventsStart = createAction('FETCH_EVENTS_START')
export const fetchEventsDone = createAction('FETCH_EVENTS_DONE')
export const updateEvents = createAction('UPDATE_EVENTS')
export const updateEventsPage = createAction('UPDATE_EVENTS_PAGE')

export const fetchEvents = () => dispatch => {
  dispatch(fetchEventsStart)
  fetch(`${SERVER_URL}/Events`)
  .then(response => response.json())
  .then(json => {
    dispatch(updateEvents(json))
    dispatch(fetchEventsDone())
  })
  .catch(error => console.log(error))
}
