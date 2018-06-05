
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchEventsStart = createAction('FETCH_EVENTS_START')
export const fetchEventsDone = createAction('FETCH_EVENTS_DONE')
export const updateEvents = createAction('UPDATE_EVENTS')

export const getEventStart = createAction('GET_EVENT_START')
export const storeEvent = createAction('STORE_EVENT')
export const getEventDone = createAction('GET_EVENT_DONE')

export const fetchFollowEventsStart = createAction('FETCH_FOLLOW_EVENTS_START')
export const fetchFollowEventsDone = createAction('FETCH_FOLLOW_EVENTS_DONE')
export const storeFollowEvents = createAction('STORE_FOLLOW_EVENTS')

export const fetchEvents = (page = 1) => dispatch => {
  dispatch(fetchEventsStart)
  fetch(`${SERVER_URL}/events?_limit=30&_page=${page}`)
  .then(response => response.json())
  .then(json => {
    dispatch(updateEvents(json.data))
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

//能不能用前面fetch到的id繼續用
export const followEvent = (event_id , user_id) => dispatch => {
  fetch(`${SERVER_URL}/users/events/${event_id}`, {
    method: "POST",
    body: {
      event_id: event_id,
      user_id: user_id
    }
  })
  .catch(error => console.log(error))
}

export const fetchFollowEvents = (user_id) => dispatch =>{
  dispatch(fetchFollowEventsStart)
  fetch(`${SERVER_URL}/events`)
  .then(response => response.json())
  .then(json => {
    dispatch(storeFollowEvents(json))
    dispatch(fetchEventsDone())
  })
  .catch(error => console.log(error))
}



