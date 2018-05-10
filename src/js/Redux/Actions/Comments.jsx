
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchCommentsStart = createAction('FETCH_COMMENTS_START')
export const fetchCommentsDone = createAction('FETCH_COMMENTS_DONE')
export const updateComments = createAction('UPDATE_COMMENTS')

export const updateCommentsPage = createAction('UPDATE_COMMENTS_PAGE')

export const getCommentStart = createAction('GET_COMMENT_START')
export const storeComment = createAction('STORE_COMMENT')
export const getCommentDone = createAction('GET_COMMENT_DONE')

export const fetchComments = (page = 1) => dispatch => {
  dispatch(fetchCommentsStart)
  fetch(`${SERVER_URL}/comments?_limit=30&_page=${page}`)
    .then(response => response.json())
    .then(json => {
      dispatch(updateComments(json))
      dispatch(fetchCommentsDone())
    })
    .catch(error => console.log(error))
}

export const getComment = (id) => dispatch => {
  dispatch(getCommentStart)
  fetch(`${SERVER_URL}/comments/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch(storeComment(json))
      dispatch(getCommentDone())
    })
    .catch(error => console.log(error))
}
