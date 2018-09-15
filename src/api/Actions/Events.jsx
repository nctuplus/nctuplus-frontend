
import { createAction } from 'redux-actions'

export default createAction({
  EVENTS: {
    INDEX: {
      SET_STATUS: null,
      STORE: null
    },
    SHOW: {
      SET_STATUS: null,
      STORE: null
    },
    NEW: {
      SET_STATUS: null,
      STORE: null
    },
    EDIT: {
      SET_STATUS: null
    },
    DELETE: {
      SET_STATUS: null
    },
    FOLLEW: {
      SET_STATUS: null,
      STORE: null
    }
  }
})
/*
export const fetchEvents = (page = 1) => dispatch => {
  dispatch(fetchEventsStart())
  fetch(`${SERVER_URL}/api/v1/events?page=${page}`)
    .then(response => response.json())
    .then(json => {
      dispatch(updateEvents(json))
      dispatch(fetchEventsDone())
    })
    .catch(error => console.log(error))
}

export const getEvent = (id) => dispatch => {
  dispatch(getEventStart())
  fetch(`${SERVER_URL}/api/v1/events/${id}`)
    .then(response => response.json())
    .then(json => {
      json.begin_time = json.begin_time.slice(0, 10)
      json.end_time = json.end_time.slice(0, 10)
      dispatch(storeEvent(json))
      dispatch(getEventDone())
    })
    .catch(error => console.log(error))
}

export const postEvent = (payload) => dispatch => {
  dispatch(postEventStart())
  fetch(`${SERVER_URL}/api/v1/events/`, {
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
  fetch(`${SERVER_URL}/api/v1/events/${id}`, {
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

export const followEvent = (id) => dispatch => {
  fetch(`${SERVER_URL}/api/v1/events/${id}/follow`, {
    method: 'POST'
  })
    .catch(error => console.log(error))
}

export const deleteFollowEvent = (id) => dispatch => {
  fetch(`${SERVER_URL}/api/v1/events/${id}/follow`, {
    method: 'DELETE'
  })
    .catch(error => console.log(error))
}

export const fetchFollowEvents = () => dispatch => {
  dispatch(fetchFollowEventsStart())
  fetch(`${SERVER_URL}/api/v1/my/events`)
    .then(response => response.json())
    .then(json => {
      dispatch(storeFollowEvents(json))
      dispatch(fetchEventsDone())
    })
    .catch(error => console.log(error))
}

export const deleteEvent = (id) => dispatch => {
  dispatch(deleteEventStart())
  fetch(`${SERVER_URL}/api/v1/events/${id}`, {
    method: 'DELETE'
  })
    .then(() => dispatch(deleteEventDone()))
    .catch(error => console.log(error))
}
*/
