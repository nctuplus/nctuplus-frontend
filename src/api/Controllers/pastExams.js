
import actions from 'api/Actions/PastExams'
import { server } from 'api/Controllers'
import { FETCHING_STATUS } from 'utilities/constants'
import { queryBuilder } from 'utilities'

export const getPastExams = (payload) => dispatch => {
  dispatch(actions.pastExams.index.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/past_exams${queryBuilder(payload, 'PastExam')}`)
    .then(({ data: pastExams }) => {
      dispatch(actions.pastExams.index.store(pastExams))
      dispatch(actions.pastExams.index.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.pastExams.index.setStatus(FETCHING_STATUS.FAIL)))
}

export const postPastExam = (payload) => dispatch => {
  dispatch(actions.pastExams.new.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .post('/api/v1/past_exams/', payload)
    .then(() => dispatch(actions.pastExams.new.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.pastExams.new.setStatus(FETCHING_STATUS.FAIL)))
}

export const getPastExamsLatestNews = (payload) => dispatch => {
  dispatch(actions.pastExams.latestNews.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/past_exams${queryBuilder(payload, 'PastExam')}`)
    .then(({ data: pastExams }) => {
      dispatch(actions.pastExams.latestNews.store(pastExams))
      dispatch(actions.pastExams.latestNews.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.pastExams.latestNews.setStatus(FETCHING_STATUS.FAIL)))
}
