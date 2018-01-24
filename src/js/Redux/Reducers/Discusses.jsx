
import { handleActions } from 'redux-actions'
import { createSelector } from 'reselect'
import { HOST, FETCHING_STATUS } from '../../constants'

const initialState = {
  status: FETCHING_STATUS.IDLE,
  recent_discusses: new Array(10).fill(0).map((value, index) => ({
    id: 123,
    key: index,
    user: '匿名',
    date: 6,
    course: '組合語言與系統程式',
    conent: '老師很認真'
  })),
  discusses: {
    data: new Array(25).fill(0).map((value, index) => ({
      id: 777,
      key: index,
      course: '組合語言與系統程式',
      teacher: '黃世強',
      title: '老師很認真',
      user: '匿名',
      user_id: '1898906487000541',
      update_time: '2017-09-13 19:54'
    })),
    page: 1,
    max_page: 1024
  }
}

export default handleActions({
  FETCH_DISCUSSES: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  FETCH_DISCUSSES_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE }),
  UPDATE_DISCUSSES_PAGE: (state, action) => ({ ...state, discusses: { ...state.discusses, page: action.payload } })

}, initialState)
