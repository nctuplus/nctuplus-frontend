
import { handleActions } from 'redux-actions'

const initialState = {
  data: {
    books: [
      {
        id: 123,
        book_name: 'University Chemistry',
        author: 'Brian B.Liard',
        course: '化學 (一)',
        teacher: '李大偉',
        date: '2017/09/20 16:59',
        preview_img: 'https://plus.nctu.edu.tw/file_upload/book_covers/000/001/425/41B0GFp5UTL._SX397_BO1_204_203_200_.jpg?1505897988',
        price: 800
      },
      {
        id: 123,
        book_name: 'University Chemistry',
        author: 'Brian B.Liard',
        course: '化學 (一)',
        teacher: '李大偉',
        date: '2017/09/20 16:59',
        preview_img: 'https://plus.nctu.edu.tw/file_upload/book_covers/000/001/425/41B0GFp5UTL._SX397_BO1_204_203_200_.jpg?1505897988',
        price: 800
      },
      {
        id: 123,
        book_name: 'University Chemistry',
        author: 'Brian B.Liard',
        course: '化學 (一)',
        teacher: '李大偉',
        date: '2017/09/20 16:59',
        preview_img: 'https://plus.nctu.edu.tw/file_upload/book_covers/000/001/425/41B0GFp5UTL._SX397_BO1_204_203_200_.jpg?1505897988',
        price: 800
      },
      {
        id: 123,
        book_name: 'University Chemistry',
        author: 'Brian B.Liard',
        course: '化學 (一)',
        teacher: '李大偉',
        date: '2017/09/20 16:59',
        preview_img: 'https://plus.nctu.edu.tw/file_upload/book_covers/000/001/425/41B0GFp5UTL._SX397_BO1_204_203_200_.jpg?1505897988',
        price: 800
      },
      {
        id: 123,
        book_name: 'University Chemistry',
        author: 'Brian B.Liard',
        course: '化學 (一)',
        teacher: '李大偉',
        date: '2017/09/20 16:59',
        preview_img: 'https://plus.nctu.edu.tw/file_upload/book_covers/000/001/425/41B0GFp5UTL._SX397_BO1_204_203_200_.jpg?1505897988',
        price: 800
      },
      {
        id: 123,
        book_name: 'University Chemistry',
        author: 'Brian B.Liard',
        course: '化學 (一)',
        teacher: '李大偉',
        date: '2017/09/20 16:59',
        preview_img: 'https://plus.nctu.edu.tw/file_upload/book_covers/000/001/425/41B0GFp5UTL._SX397_BO1_204_203_200_.jpg?1505897988',
        price: 800
      }
    ],
    sold_books: [
      {
        id: 123,
        name: 'Pathways (3A): Listening, speaking & critical thinking',
        sold_time: '1小時前'
      },
      {
        id: 123,
        name: 'Pathways (3A): Listening, speaking & critical thinking',
        sold_time: '1小時前'
      },
      {
        id: 123,
        name: 'Pathways (3A): Listening, speaking & critical thinking',
        sold_time: '1小時前'
      },
      {
        id: 123,
        name: 'Pathways (3A): Listening, speaking & critical thinking',
        sold_time: '1小時前'
      },
      {
        id: 123,
        name: 'Pathways (3A): Listening, speaking & critical thinking',
        sold_time: '1小時前'
      },
      {
        id: 123,
        name: 'Pathways (3A): Listening, speaking & critical thinking',
        sold_time: '1小時前'
      },
      {
        id: 123,
        name: 'Pathways (3A): Listening, speaking & critical thinking',
        sold_time: '1小時前'
      },
      {
        id: 123,
        name: 'Pathways (3A): Listening, speaking & critical thinking',
        sold_time: '1小時前'
      },
      {
        id: 123,
        name: 'Pathways (3A): Listening, speaking & critical thinking',
        sold_time: '1小時前'
      }
    ]
  },
  status: 'FETCHING_STATUS.IDLE',
  page: 1,
  max_page: 1024,
  filters: {
    'sort_by': 'price',
    'descend': true
  }
}

export default handleActions({
  FETCH_BOOKS: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  FETCH_BOOKS_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  UPDATE_BOOKS_PAGE: (state, action) => ({ ...state, page: action.payload }),
  APPLY_BOOKS_FILTERS: (state, action) => ({ ...state, filters: { ...state.filters, ...action.payload } }),
  CLEAR_BOOKS_FILTERS: (state) => ({ ...state, filters: initialState.filters })
}, initialState)
