
import actions from 'api/Actions/Events'
import { server } from 'api/Controllers'
import { FETCHING_STATUS } from 'utilities/constants'

export const fetchEvents = (page = 1) => dispatch => {
  dispatch(actions.events.index.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/events?page=${page}`)
    .then(({ data: events }) => {
      dispatch(actions.events.index.store(events))
      dispatch(actions.events.index.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.events.index.setStatus(FETCHING_STATUS.FAIL)))
}

export const getEvent = (id) => dispatch => {
  dispatch(actions.events.show.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/events/${id}`)
    .then(({ data: event }) => {
      event.begin_time = event.begin_time.slice(0, 10)
      event.end_time = event.end_time.slice(0, 10)
      dispatch(actions.events.show.store(event))
      dispatch(actions.events.show.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.events.show.setStatus(FETCHING_STATUS.FAIL)))
}

export const postEvent = (payload) => dispatch => {
  dispatch(actions.events.new.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .post('/api/v1/events/', payload)
    .then(({ data: event }) => {
      dispatch(actions.events.new.store(event))
      dispatch(actions.events.new.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.events.new.setStatus(FETCHING_STATUS.FAIL)))
}

export const patchEvent = (payload, id) => dispatch => {
  dispatch(actions.events.edit.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .patch(`/api/v1/events/${id}`, payload)
    .then(({ data: event }) => dispatch(actions.events.edit.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.events.edit.setStatus(FETCHING_STATUS.FAIL)))
}

export const deleteEvent = (id) => dispatch => {
  dispatch(actions.events.delete.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .delete(`/api/v1/events/${id}`)
    .then(({ data: event }) => dispatch(actions.events.delete.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.events.delete.setStatus(FETCHING_STATUS.FAIL)))
}

export const fetchFollowEvents = () => dispatch => {
  dispatch(actions.events.follow.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .get('/api/v1/my/events')
    .then(({ data: events }) => {
      dispatch(actions.events.follow.store(events))
      dispatch(actions.events.follow.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.events.follow.setStatus(FETCHING_STATUS.FAIL)))
}

export const updateFollowEvents = (id, events) => dispatch => {
  dispatch(actions.events.follow.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .post(`/api/v1/events/${id}/follow`)
    .then(() => {
      let updated = [ ...events ]
      updated.push({id: id})
      dispatch(actions.events.follow.store(updated))
      dispatch(actions.events.follow.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.events.follow.setStatus(FETCHING_STATUS.FAIL)))
}

export const deleteFollowEvents = (id, pos, events) => dispatch => {
  dispatch(actions.events.follow.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .delete(`/api/v1/events/${id}/follow`)
    .then(() => {
      let updated = [ ...events ]
      updated.splice(pos, 1)
      dispatch(actions.events.follow.store(updated))
      dispatch(actions.events.follow.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.events.follow.setStatus(FETCHING_STATUS.FAIL)))
}
