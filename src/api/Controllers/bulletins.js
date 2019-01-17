
import actions from 'api/Actions/Bulletins'
import { FETCHING_STATUS } from 'utilities/constants'
import { queryBuilder } from 'utilities'
import { server } from 'api/Controllers'

export const getBulletins = (payload) => dispatch => {
  dispatch(actions.bulletins.index.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/bulletins${queryBuilder(payload, 'Bulletin')}`)
    .then(({ data: bulletins }) => {
      dispatch(actions.bulletins.index.store(bulletins))
      dispatch(actions.bulletins.index.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.bulletins.index.setStatus(FETCHING_STATUS.FAIL)))
}

export const getBulletin = (id) => dispatch => {
  dispatch(actions.bulletins.show.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/bulletins/${id}`)
    .then(({ data: bulletin }) => {
      dispatch(actions.bulletins.show.store(bulletin))
      dispatch(actions.bulletins.show.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.bulletins.show.setStatus(FETCHING_STATUS.FAIL)))
}

export const postBulletin = (payload) => dispatch => {
  dispatch(actions.bulletins.new.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .post('/api/v1/bulletins/', payload)
    .then(({ data: bulletin }) => {
      dispatch(actions.bulletins.new.store(bulletin))
      dispatch(actions.bulletins.new.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.bulletins.new.setStatus(FETCHING_STATUS.FAIL)))
}

export const patchBulletin = (payload, id) => dispatch => {
  dispatch(actions.bulletins.edit.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .patch(`/api/v1/bulletins/${id}`, payload)
    .then(() => dispatch(actions.bulletins.edit.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.bulletins.edit.setStatus(FETCHING_STATUS.FAIL)))
}

export const deleteBulletin = (id) => dispatch => {
  dispatch(actions.bulletins.delete.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .delete(`/api/v1/bulletins/${id}`)
    .then(() => dispatch(actions.bulletins.delete.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.bulletins.delete.setStatus(FETCHING_STATUS.FAIL)))
}
