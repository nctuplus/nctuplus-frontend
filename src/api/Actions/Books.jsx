
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchBooksStart = createAction('FETCH_BOOKS_START')
export const fetchBooksDone = createAction('FETCH_BOOKS_DONE')
export const updateBooks = createAction('UPDATE_BOOKS')

export const updateBooksPage = createAction('UPDATE_BOOKS_PAGE')

export const getBookStart = createAction('GET_BOOK_START')
export const storeBook = createAction('STORE_BOOK')
export const getBookDone = createAction('GET_BOOK_DONE')

export const postBookStart = createAction('POST_BOOK_START')
export const storePostBook = createAction('STORE_POST_BOOK')
export const postBookDone = createAction('POST_BOOK_DONE')
export const postBookReset = createAction('POST_BOOK_RESET')

export const patchBookStart = createAction('PATCH_BOOK_START')
export const patchBookDone = createAction('PATCH_BOOK_DONE')
export const patchBookReset = createAction('PATCH_BOOK_RESET')

export const applyBooksFilters = createAction('APPLY_BOOKS_FILTERS')
export const resetBooksFilters = createAction('RESET_BOOKS_FILTERS')

export const fetchBooks = (page = 1) => dispatch => {
  dispatch(fetchBooksStart())
  fetch(`${SERVER_URL}/api/v1/books?page=${page}`)
    .then(response => response.json())
    .then(json => {
      dispatch(updateBooks(json))
      dispatch(fetchBooksDone())
    })
    .catch(error => console.log(error))
}

export const getBook = (id) => dispatch => {
  dispatch(getBookStart())
  fetch(`${SERVER_URL}/api/v1/books/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch(storeBook(json))
      dispatch(getBookDone())
    })
    .catch(error => console.log(error))
}

export const postBook = (payload) => dispatch => {
  dispatch(postBookStart())
  fetch(`${SERVER_URL}/api/v1/books/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => {
      dispatch(storePostBook(json))
      dispatch(postBookDone())
    })
    .catch(error => console.log(error))
}

export const patchBook = (payload, id) => dispatch => {
  dispatch(patchBookStart())
  fetch(`${SERVER_URL}/api/v1/books/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(patchBookDone()))
    .catch(error => console.log(error))
}
