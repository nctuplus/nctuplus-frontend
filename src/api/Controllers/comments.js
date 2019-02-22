
import actions from 'api/Actions/Comments'
import { server } from 'api/Controllers'
import { FETCHING_STATUS } from 'utilities/constants'
import { queryBuilder } from 'utilities'

export const getComments = (payload) => dispatch => {
  dispatch(actions.comments.index.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/comments${queryBuilder(payload, 'Comment')}`)
    .then(({ data: comments }) => {
      dispatch(actions.comments.index.store(comments))
      dispatch(actions.comments.index.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.comments.index.setStatus(FETCHING_STATUS.FAIL)))
}

export const getComment = (id) => dispatch => {
  dispatch(actions.comments.show.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/comments/${id}`)
    .then(({ data: comment }) => {
      comment.created_at = comment.created_at.slice(0, 10)
      comment.updated_at = comment.updated_at.slice(0, 10)
      dispatch(actions.comments.show.store(comment))
      dispatch(actions.comments.show.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.comments.show.setStatus(FETCHING_STATUS.FAIL)))
}

export const postComment = (payload) => dispatch => {
  dispatch(actions.comments.new.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .post('/api/v1/comments/', payload)
    .then(({ data: comment }) => {
      dispatch(actions.comments.new.store(comment))
      dispatch(actions.comments.new.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.comments.new.setStatus(FETCHING_STATUS.FAIL)))
}

export const patchComment = (payload, id) => dispatch => {
  dispatch(actions.comments.edit.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .patch(`/api/v1/comments/${id}`, payload)
    .then(({ data: comment }) => dispatch(actions.comments.edit.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.comments.edit.setStatus(FETCHING_STATUS.FAIL)))
}

export const deleteComment = (id) => dispatch => {
  dispatch(actions.comments.delete.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .delete(`/api/v1/comments/${id}`)
    .then(() => dispatch(actions.comments.delete.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.comments.delete.setStatus(FETCHING_STATUS.FAIL)))
}

export const getCommentsLatestNews = (payload) => dispatch => {
  dispatch(actions.comments.latestNews.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/comments${queryBuilder(payload, 'Comment')}`)
    .then(({ data: comments }) => {
      dispatch(actions.comments.latestNews.store(comments))
      dispatch(actions.comments.latestNews.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.comments.lastest_news.setStatus(FETCHING_STATUS.FAIL)))
}
