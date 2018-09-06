
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchDepartmentsStart = createAction('FETCH_DEPARTMENTS_START')
export const fetchDepartmentsDone = createAction('FETCH_DEPARTMENTS_DONE')
export const updateDepartments = createAction('UPDATE_DEPARTMENTS')

export const getDepartmentStart = createAction('GET_DEPARTMENT_START')
export const storeDepartment = createAction('STORE_DEPARTMENT')
export const getDepartmentDone = createAction('GET_DEPARTMENT_DONE')

export const postDepartmentStart = createAction('POST_DEPARTMENT_START')
export const postDepartmentDone = createAction('POST_DEPARTMENT_DONE')
export const postDepartmentReset = createAction('POST_DEPARTMENT_RESET')

export const patchDepartmentStart = createAction('PATCH_DEPARTMENT_START')
export const patchDepartmentDone = createAction('PATCH_DEPARTMENT_DONE')
export const patchDepartmentReset = createAction('PATCH_DEPARTMENT_RESET')

export const fetchDepartments = (page = 1) => dispatch => {
  dispatch(fetchDepartmentsStart())
  fetch(`${SERVER_URL}/api/v1/departments`)
    .then(response => response.json())
    .then(json => {
      dispatch(updateDepartments(json))
      dispatch(fetchDepartmentsDone())
    })
    .catch(error => console.log(error))
}

export const getDepartment = (id) => dispatch => {
  dispatch(getDepartmentStart())
  fetch(`${SERVER_URL}/api/v1/departments/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch(storeDepartment(json))
      dispatch(getDepartmentDone())
    })
    .catch(error => console.log(error))
}

export const postDepartment = (payload) => dispatch => {
  dispatch(postDepartmentStart())
  fetch(`${SERVER_URL}/api/v1/departments/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(postDepartmentDone()))
    .catch(error => console.log(error))
}

export const patchDepartment = (payload, id) => dispatch => {
  dispatch(patchDepartmentStart())
  fetch(`${SERVER_URL}/api/v1/departments/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(patchDepartmentDone()))
    .catch(error => console.log(error))
}
