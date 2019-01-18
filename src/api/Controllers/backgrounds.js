
import actions from 'api/Actions/Backgrounds'
import { server } from 'api/Controllers'
import { FETCHING_STATUS } from 'utilities/constants'

export const getBackgrounds = () => dispatch => {
  dispatch(actions.backgrounds.index.setStatus(FETCHING_STATUS.START))
  server.public
    .get('/api/v1/backgrounds')
    .then(({ data: backgrounds }) => {
      dispatch(actions.backgrounds.index.store(backgrounds))
      dispatch(actions.backgrounds.index.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.backgrounds.index.setStatus(FETCHING_STATUS.FAIL)))
}

export const postBackground = (payload) => dispatch => {
  dispatch(actions.backgrounds.new.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .post('/api/v1/backgrounds/', payload)
    .then(({ data: background }) => {
      dispatch(actions.backgrounds.new.store(background))
      dispatch(actions.backgrounds.new.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.backgrounds.new.setStatus(FETCHING_STATUS.FAIL)))
}

export const deleteBackground = (id) => dispatch => {
  dispatch(actions.backgrounds.delete.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .delete(`/api/v1/backgrounds/${id}`)
    .then(() => dispatch(actions.backgrounds.delete.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.backgrounds.delete.setStatus(FETCHING_STATUS.FAIL)))
}
