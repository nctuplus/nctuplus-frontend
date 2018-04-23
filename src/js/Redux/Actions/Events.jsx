
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchEventsStart = createAction('FETCH_EVENTS_START')
export const fetchEventsDone = createAction('FETCH_EVENTS_DONE')
export const updateEvents = createAction('UPDATE_EVENTS')

export const getEventStart = createAction('GET_EVENT_START')
export const storeEvent = createAction('STORE_EVENT')
export const getEventDone = createAction('GET_EVENT_DONE')

export const postEventStart = createAction('POST_EVENT_START')
export const postEventDone = createAction('POST_EVENT_DONE')
export const storePostEvent = createAction('STORE_POST_EVENT')
export const postEventReset = createAction('POST_EVENT_RESET')

export const patchEventStart = createAction('PATCH_EVENT_START')
export const patchEventDone = createAction('PATCH_EVENT_DONE')
export const patchEventReset = createAction('PATCH_EVENT_RESET')

export const fetchFollowEventsStart = createAction('FETCH_FOLLOW_EVENTS_START')
export const fetchFollowEventsDone = createAction('FETCH_FOLLOW_EVENTS_DONE')
export const storeFollowEvents = createAction('STORE_FOLLOW_EVENTS')

export const deleteEventStart = createAction('DELETE_EVENT_START')
export const deleteEventDone = createAction('DELETE_EVENT_DONE')
export const deleteEventReset = createAction('DELETE_EVENT_RESET')

export const fetchEvents = (page = 1) => dispatch => {
  dispatch(fetchEventsStart())
  fetch(`${SERVER_URL}/events?_limit=30&_page=${page}`)
  .then(response => response.json())
  .then(json => {
    dispatch(updateEvents(json.data))
    dispatch(fetchEventsDone())
  })
  .catch(error => console.log(error))
}

export const getEvent = (id) => dispatch => {
  dispatch(getEventStart())
  fetch(`${SERVER_URL}/events/${id}`)
  .then(response => response.json())
  .then(json => {
    dispatch(storeEvent(json))
    dispatch(getEventDone())
  })
  .catch(error => console.log(error))
}

export const postEvent = (payload) => dispatch => {
  dispatch(postEventStart())
  fetch(`${SERVER_URL}/events/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(json => {
    dispatch(storePostEvent(json))
    dispatch(postEventDone()) 
  })
  .catch(error => console.log(error))
}

export const patchEvent = (payload, id) => dispatch => {
  dispatch(patchEventStart())
  fetch(`${SERVER_URL}/events/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(json => dispatch(patchEventDone()))
  .catch(error => console.log(error))
}

export const followEvent = (event_id , user_id) => dispatch => {
  fetch(`${SERVER_URL}/users/events/${event_id}`, {
    method: 'POST',
    body: {
      event_id: event_id,
      user_id: user_id
    }
  })
  .catch(error => console.log(error))
}

export const fetchFollowEvents = (user_id) => dispatch => {
  dispatch(fetchFollowEventsStart())
  fetch(`${SERVER_URL}/events`)
  .then(response => response.json())
  .then(json => {
    dispatch(storeFollowEvents(json))
    dispatch(fetchEventsDone())
  })
  .catch(error => console.log(error))
}

export const deleteEvent = (id) => dispatch => {
  let payload = {
    event_id: id
  }

  dispatch(deleteEventStart())
  fetch(`${SERVER_URL}/events/${id}`, {
    method: 'DELETE',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(json => dispatch(deleteEventDone()))
  .catch(error => console.log(error))
}