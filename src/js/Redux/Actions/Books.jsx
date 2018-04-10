
import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions'

export const fetchBooksStart = createAction('FETCH_BOOKS_START')
export const fetchBooksDone = createAction('FETCH_BOOKS_DONE')
export const updateBooksPage = createAction('UPDATE_BOOKS_PAGE')
export const updateBooks = createAction('UPDATE_BOOKS')
export const applyBooksFilters = createAction('APPLY_BOOKS_FILTERS')

export const fetchBooks = () => dispatch => {
  dispatch(fetchBooksStart)
  fetch(`${SERVER_URL}/Books`)
  .then(response => response.json())
  .then(json => {
    dispatch(updateBooks(json))
    dispatch(fetchBooksDone())
  })
  .catch(error => console.log(error))
}
