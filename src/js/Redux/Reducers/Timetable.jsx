
import { handleActions } from 'redux-actions'

const initialState = {
  courses: [{
    id: 131,
    name: 'solution',
    teachers: '秦 思遠 IV',
    credit: 1,
    type: 'required',
    category: 'Saint Kitts and Nevis',
    course_time: '1AB5G',
    classroom: 'EDB27',
    grade: 3,
    created_at: '2017/10/19 05:43:20',
    updated_at: '2017/09/26 03:52:35'
  },
  {
    id: 339,
    name: 'Metrics',
    teachers: '黎 修傑',
    credit: 0,
    type: 'foreign',
    category: 'Dynamic',
    course_time: '2CD',
    classroom: 'EDB27',
    grade: 4,
    created_at: '2017/04/24 03:30:53',
    updated_at: '2018/03/06 03:40:00'
  },
  {
    id: 291,
    name: 'Sri Lanka Rupee',
    teachers: 'Miss 範 鵬飛',
    credit: 0,
    type: 'general',
    category: 'navigate',
    course_time: '1GH4CD',
    classroom: 'EDB27',
    created_at: '2017/04/25 10:34:39',
    updated_at: '2017/05/17 09:45:55'
  }],
  selected: {},
  hovering: false,
  minified: false
}

export default handleActions({
  TIMETABLE_SELECT_NEW_CELL: (state, action) => ({
    ...state,
    selected: {
      ...state.selected,
      [action.payload]: true
    }
  }),
  TIMETABLE_UNSELECT_CELL: (state, action) => ({
    ...state,
    selected: {
      ...state.selected,
      [action.payload]: false
    }
  }),
  TIMETABLE_SET_HOVERING: (state, action) => ({ ...state, hovering: action.payload }),
  TIMETABLE_ADJUST_ROW: (state, action) => ({ ...state, minified: !state.minified })
}, initialState)
