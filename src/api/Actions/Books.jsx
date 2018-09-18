
import { createActions } from 'redux-actions'

export default createActions({
  BOOKS: {
    INDEX: {
      SET_STATUS: null,
      STORE: null,
      UPDATE_PAGE: null,
      UPDATE_FILETERS: null
    },
    SHOW: {
      SET_STATUS: null,
      STORE: null
    },
    NEW: {
      SET_STATUS: null,
      STORE: null
    },
    EDIT: {
      SET_STATUS: null
    },
    DELETE: {
      SET_STATUS: null
    }
  }
})
/*
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
*/
