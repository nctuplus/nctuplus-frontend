
import actions from 'api/Actions/Departments'
import { server } from 'api/Controllers'
import { FETCHING_STATUS } from 'utilities/constants'

export const fetchDepartments = () => dispatch => {
  dispatch(actions.departments.index.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get('/api/v1/departments')
    .then(({ data: departments }) => {
      dispatch(actions.departments.index.store(departments))
      dispatch(actions.departments.index.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.departments.index.setStatus(FETCHING_STATUS.FAIL)))
}

export const getDepartment = (id) => dispatch => {
  dispatch(actions.departments.get.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/departments/${id}`)
    .then(({ data: department }) => {
      dispatch(actions.departments.show.store(department))
      dispatch(actions.departments.show.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.departments.show.setStatus(FETCHING_STATUS.FAIL)))
}

export const postDepartment = (payload) => dispatch => {
  dispatch(actions.departments.edit.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .post('/api/v1/departments/', payload)
    .then(() => dispatch(actions.departments.edit.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.departments.edit.setStatus(FETCHING_STATUS.FAIL)))
}

export const patchDepartment = (payload, id) => dispatch => {
  dispatch(actions.departments.edit.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .patch(`/api/v1/departments/${id}`, payload)
    .then(() => dispatch(actions.departments.edit.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.departments.edit.setStatus(FETCHING_STATUS.FAIL)))
}
