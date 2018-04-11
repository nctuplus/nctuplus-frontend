
import { combineReducers } from 'redux'
import bulletins from './Bulletins'
import books from './Books'
import courses from './Courses'
import comments from './Comments'
import pastExams from './PastExams'
import events from './Events'

export default combineReducers({
  bulletins,
  books,
  courses,
  comments,
  events,
  pastExams
})
