
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

export const postCommentReply = (payload, id) => dispatch => {
  dispatch(actions.comments.reply.new.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .post(`/api/v1/comments/${id}/reply`, payload)
    .then(() => dispatch(actions.comments.reply.new.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.comments.reply.new.setStatus(FETCHING_STATUS.FAIL)))
}

export const patchCommentReply = (payload, commentId, replyId) => dispatch => {
  dispatch(actions.comments.reply.edit.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .patch(`/api/v1/comments/${commentId}/reply/${replyId}`, payload)
    .then(() => dispatch(actions.comments.reply.edit.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.comments.reply.edit.setStatus(FETCHING_STATUS.FAIL)))
}

export const deleteCommentReply = (commentId, replyId) => dispatch => {
  dispatch(actions.comments.reply.delete.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .delete(`/api/v1/comments/${commentId}/reply/${replyId}`)
    .then(() => dispatch(actions.comments.reply.delete.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.comments.reply.delete.setStatus(FETCHING_STATUS.FAIL)))
}

export const getCommentsLatestNews = () => dispatch => {
  dispatch(actions.comments.latestNews.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get('/api/v1/comments/latest_news')
    .then(({ data: comments }) => {
      dispatch(actions.comments.latestNews.store(comments))
      dispatch(actions.comments.latestNews.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.comments.lastestNews.setStatus(FETCHING_STATUS.FAIL)))
}
