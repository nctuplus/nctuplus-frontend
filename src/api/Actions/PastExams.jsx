
import fetch from 'isomorphic-fetch'
import { FETCHING_STATUS } from 'utilities/constants'
import { createActions } from 'redux-actions'

const actions = createActions({
  PAST_EXAMS: {
    INDEX: {
      SET_STATUS: null,
      STORE: null,
      UPDATE_PAGE: null
    }
  }
})

const pastExamsActions = actions.pastExams

pastExamsActions.index.fetch = (page = 1) => dispatch => {
  dispatch(pastExamsActions.index.setStatus(FETCHING_STATUS.FETCHING))
  fetch(`${SERVER_URL}/api/v1/past_exams?page=${page}`)
    .then(response => response.json())
    .then(json => {
      dispatch(pastExamsActions.index.store(json))
      dispatch(pastExamsActions.index.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(pastExamsActions.index.setStatus(FETCHING_STATUS.FAIL)))
}

export default pastExamsActions
