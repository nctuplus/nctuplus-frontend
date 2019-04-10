
import actions from 'api/Actions/Users'
import { server } from 'api/Controllers'
import { FETCHING_STATUS } from 'utilities/constants'
import { queryBuilder } from 'utilities'

export const fetchUsers = (payload) => dispatch => {
  dispatch(actions.users.index.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/users${queryBuilder(payload, 'Users')}`)
    .then(({ data: users }) => {
      dispatch(actions.users.index.store(users))
      dispatch(actions.users.index.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.users.index.setStatus(FETCHING_STATUS.FAIL)))
}
