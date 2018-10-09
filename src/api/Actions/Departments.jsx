
import fetch from 'isomorphic-fetch'
import { createActions } from 'redux-actions'
import { FETCHING_STATUS as fstat } from 'utilities/constants'

export const actions = createActions({
  DEPARTMENT: {
    FETCH: {
      SET_STATUS: null,
      UPDATE: null
    },
    GET: {
      SET_STATUS: null,
      STORE: null
    },
    POST: {
      SET_STATUS: null
    },
    PATCH: {
      SET_STATUS: null
    }
  }
})

export const postDepartmentReset = actions.department.post.setStatus(fstat.IDLE)
export const patchDepartmentReset = actions.department.patch.setStatus(fstat.IDLE)

export const fetchDepartments = (page = 1) => dispatch => {
  dispatch(actions.department.fetch.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/departments`)
    .then(response => response.json())
    .then(json => {
      dispatch(actions.department.fetch.update(json))
      dispatch(actions.department.fetch.setStatus(fstat.DONE))
    })
    .catch(error => console.log(error))
}

export const getDepartment = (id) => dispatch => {
  dispatch(actions.department.get.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/departments/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch(actions.department.get.store(json))
      dispatch(actions.department.get.setStatus(fstat.DONE))
    })
    .catch(error => console.log(error))
}

export const postDepartment = (payload) => dispatch => {
  dispatch(actions.department.post.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/departments/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(actions.department.post.setStatus(fstat.DONE)))
    .catch(error => console.log(error))
}

export const patchDepartment = (payload, id) => dispatch => {
  dispatch(actions.department.patch.setStatus(fstat.FETCHING))
  fetch(`${SERVER_URL}/api/v1/departments/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(actions.department.patch.setStatus(fstat.DONE)))
    .catch(error => console.log(error))
}
