
import { combineReducers } from 'redux'
import bulletins from './Bulletins'
import books from './Books'
import courses from './Courses'
import discusses from './Discusses'




export default combineReducers ({
  bulletins,
  books,
  courses,
  discusses
})