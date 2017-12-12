
import { createAction, createActions, combineActions } from 'redux-actions'

export const fetch_books = createAction('FETCH_BOOKS')
export const fetch_books_done = createAction('FETCH_BOOKS_DONE')
export const update_books_page = createAction('UPDATE_BOOKS_PAGE')
export const apply_books_filters = createAction('APPLY_BOOKS_FILTERS')
