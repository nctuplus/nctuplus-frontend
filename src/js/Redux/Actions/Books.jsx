
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchBooksStart = createAction('FETCH_BOOKS_START')
export const fetchBooksDone = createAction('FETCH_BOOKS_DONE')
export const updateBooks = createAction('UPDATE_BOOKS')

export const updateBooksPage = createAction('UPDATE_BOOKS_PAGE')

export const getBookStart = createAction('GET_BOOK_START')
export const storeBook = createAction('STORE_BOOK')
export const getBookDone = createAction('GET_BOOK_DONE')

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
