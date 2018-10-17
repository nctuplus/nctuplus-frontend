
import actions from 'api/Actions/PastExams'
import { server } from 'api/Controllers'
import { FETCHING_STATUS } from 'utilities/constants'

export const getPastExams = (page = 1) => dispatch => {
  dispatch(actions.pastExams.index.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/past_exams?page=${page}`)
    .then(({ data: pastExams }) => {
      dispatch(actions.pastExams.index.store(pastExams))
      dispatch(actions.pastExams.index.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.pastExams.index.setStatus(FETCHING_STATUS.FAIL)))
}
