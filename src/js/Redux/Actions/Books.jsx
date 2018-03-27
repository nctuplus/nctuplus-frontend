
import { createAction } from 'redux-actions'

export const fetchBooks = createAction('FETCH_BOOKS')
export const fetchBooksDone = createAction('FETCH_BOOKS_DONE')
export const updateBooksPage = createAction('UPDATE_BOOKS_PAGE')
export const applyBooksFilters = createAction('APPLY_BOOKS_FILTERS')
