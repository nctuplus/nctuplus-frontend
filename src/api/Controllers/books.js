
import actions from 'api/Actions/Books'
import { server } from 'api/Controllers'
import { FETCHING_STATUS } from 'utilities/constants'
import { queryBuilder } from 'utilities'

export const getBooks = (payload) => dispatch => {
  dispatch(actions.books.index.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/books${queryBuilder(payload)}`)
    .then(({ data: books }) => {
      dispatch(actions.books.index.store(books))
      dispatch(actions.books.index.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.books.index.setStatus(FETCHING_STATUS.FAIL)))
}

export const getBook = (id) => dispatch => {
  dispatch(actions.books.show.setStatus(FETCHING_STATUS.FETCHING))
  server.public
    .get(`/api/v1/books/${id}`)
    .then(({ data: book }) => {
      dispatch(actions.books.show.store(book))
      dispatch(actions.books.show.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.books.show.setStatus(FETCHING_STATUS.FAIL)))
}

export const postBook = (payload) => dispatch => {
  dispatch(actions.books.new.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .post('/api/v1/books/', payload)
    .then(({ data: book }) => {
      dispatch(actions.books.new.store(book))
      dispatch(actions.books.new.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.books.new.setStatus(FETCHING_STATUS.FAIL)))
}

export const patchBook = (payload, id) => dispatch => {
  dispatch(actions.books.edit.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .patch(`/api/v1/books/${id}`, payload)
    .then(() => dispatch(actions.books.edit.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.books.edit.setStatus(FETCHING_STATUS.FAIL)))
}

export const deleteBook = (id) => dispatch => {
  dispatch(actions.books.delete.setStatus(FETCHING_STATUS.FETCHING))
  server.protected
    .delete(`/api/v1/books/${id}`)
    .then(() => dispatch(actions.books.delete.setStatus(FETCHING_STATUS.DONE)))
    .catch(() => dispatch(actions.books.delete.setStatus(FETCHING_STATUS.FAIL)))
}
