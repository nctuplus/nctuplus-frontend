
import { combineReducers } from 'redux'
import bulletins from './Bulletins'
import slogans from './Slogans'
import backgrounds from './Backgrounds'
import users from './Users'
import departments from './Departments'
import courseMaps from './CourseMaps'
import books from './Books'
import courses from './Courses'
import comments from './Comments'
import pastExams from './PastExams'
import events from './Events'
import timetable from './Timetable'
import user from './User'
import searchPanel from './SearchPanel'

export default combineReducers({
  bulletins,
  slogans,
  backgrounds,
  users,
  departments,
  courseMaps,
  books,
  courses,
  comments,
  events,
  pastExams,
  timetable,
  user,
  searchPanel
})
