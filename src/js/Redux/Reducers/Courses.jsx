
import { handleActions } from 'redux-actions'
import { createSelector } from 'reselect'
import { HOST, FETCHING_STATUS } from '../../constants'

const initialState = {
  status: FETCHING_STATUS.IDLE,
  data: new Array(25).fill(0).map((value, index) => ({
    id: 36861,
    key: index,
    semester: '106上',
    department: '電工系',
    name: '電子學（一）',
    teachers: '陳龍英',
    credit: '3',
    course_time: '1GH4CD',
    grade: '2'
  })),
  page: 1,
  max_page: 1024
}

export default handleActions({
  FETCH_COURSES: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  FETCH_COURSES_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  UPDATE_COURSES_PAGE: (state, action) => ({ ...state, page: action.payload })

}, initialState)
