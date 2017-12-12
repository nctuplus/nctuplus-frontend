
import React from 'react'
import { SearchCourse } from '../../Components/Search'
import { CoursesTable } from '../../Components/Course'

import { connect } from 'react-redux'
import { fetch_courses, fetch_courses_done, update_courses_page } from '../../Redux/Actions/Courses'

const Course = (props) => (
  <div className='course page-wrapper'>
    <div className='container'>
      <div className='search-wrapper'>
        <SearchCourse show_semester={true} />
      </div>
      <CoursesTable { ...props.courses_table } update_page={ props.update_page } />
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  courses_table: state.courses,
})

const mapDispatchToProps = (dispatch) => ({
  update_page: (page) => dispatch(update_courses_page(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Course)
