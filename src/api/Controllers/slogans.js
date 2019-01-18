
import actions from 'api/Actions/Slogans'
import { FETCHING_STATUS } from 'utilities/constants'
import { server } from 'api/Controllers'

export const getSlogans = () => dispatch => {
  dispatch(actions.slogans.index.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get('/api/v1/slogans')
    .then(({ data: slogans }) => {
      dispatch(actions.slogans.index.store(slogans))
      dispatch(actions.slogans.index.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.slogans.index.setStatus(FETCHING_STATUS.FAIL)))
}

export const getSlogan = (id) => dispatch => {
  dispatch(actions.slogans.show.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/slogans/${id}`)
    .then(({ data: slogan }) => {
      slogan.created_at = slogan.created_at.slice(0, 10)
      slogan.updated_at = slogan.updated_at.slice(0, 10)
      dispatch(actions.slogans.show.store(slogan))
      dispatch(actions.slogans.show.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.slogans.show.setStatus(FETCHING_STATUS.FAIL)))
}

export const postSlogan = (payload) => dispatch => {
  dispatch(actions.slogans.new.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .post('/api/v1/slogans/', payload)
    .then(({ data: slogan }) => {
      dispatch(actions.slogans.new.store(slogan))
      dispatch(actions.slogans.new.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.slogans.new.setStatus(FETCHING_STATUS.FAIL)))
}

export const patchSlogan = (payload, id) => dispatch => {
  dispatch(actions.slogans.edit.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .patch(`/api/v1/slogans/${id}`, payload)
    .then(() => dispatch(actions.slogans.edit.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.slogans.edit.setStatus(FETCHING_STATUS.FAIL)))
}

export const deleteSlogan = (id) => dispatch => {
  dispatch(actions.slogans.delete.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .delete(`/api/v1/slogans/${id}`)
    .then(() => dispatch(actions.slogans.delete.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.slogans.delete.setStatus(FETCHING_STATUS.FAIL)))
}
