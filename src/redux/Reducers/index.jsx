
import { combineReducers } from 'redux'
import bulletins from './Bulletins'
import slogans from './Slogans'
import books from './Books'
import courses from './Courses'
import comments from './Comments'
import pastExams from './PastExams'
import events from './Events'
import timetable from './Timetable'
import user from './User'

export default combineReducers({
  bulletins,
  slogans,
  books,
  courses,
  comments,
  events,
  pastExams,
  timetable,
  user
})
