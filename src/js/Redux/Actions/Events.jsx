
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchEventsStart = createAction('FETCH_EVENTS_START')
export const fetchEventsDone = createAction('FETCH_EVENTS_DONE')
export const updateEvents = createAction('UPDATE_EVENTS')

export const getEventStart = createAction('GET_EVENT_START')
export const storeEvent = createAction('STORE_EVENT')
export const getEventDone = createAction('GET_EVENT_DONE')

export const fetchEvents = (page = 1) => dispatch => {
  dispatch(fetchEventsStart)
  fetch(`${SERVER_URL}/events?_limit=30&_page=${page}`)
  .then(response => response.json())
  .then(json => {
    dispatch(updateEvents(json))
    dispatch(fetchEventsDone())
  })
  .catch(error => console.log(error))
}

export const getEvent = (id) => dispatch => {
  dispatch(getEventStart)
  fetch(`${SERVER_URL}/events/${id}`)
  .then(response => response.json())
  .then(json => {
    dispatch(storeEvent(json))
    dispatch(getEventDone())
  })
  .catch(error => console.log(error))
}
