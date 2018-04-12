
import React from 'react'
import { SearchCourse } from '../../../Components/Search'
import { CourseTable } from '../../../Components/Course'
import Spinner from '../../../Components/Spinner'
import './style.scss'

import { connect } from 'react-redux'
import { updateCoursesPage, fetchCourses } from '../../../Redux/Actions/Courses'

const Index = (props) => {
  props.courses.status || props.fetch_data()
  return (
    <div className='course page-wrapper'>
      <div className='container'>
        <div className='search-wrapper'>
          <SearchCourse show_semester />
        </div>
        {
          props.courses.status
          ? <CourseTable {...props.courses} update_page={props.update_page} />
          : <div className='text-center'><Spinner size={48} color='grey' /></div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  courses: state.courses
})

const mapDispatchToProps = (dispatch) => ({
  fetch_data: (page) => dispatch(fetchCourses(page)),
  update_page: (page) => dispatch(updateCoursesPage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
