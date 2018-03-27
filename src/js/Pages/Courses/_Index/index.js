
import React from 'react'
import { SearchCourse } from '../../../Components/Search'
import { CoursesTable } from '../../../Components/Course'
import './style.scss'

import { connect } from 'react-redux'
import { updateCoursesPage } from '../../../Redux/Actions/Courses'

const Index = (props) => (
  <div className='course page-wrapper'>
    <div className='container'>
      <div className='search-wrapper'>
        <SearchCourse show_semester />
      </div>
      <CoursesTable {...props.courses_table} update_page={props.update_page} />
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  courses_table: state.courses
})

const mapDispatchToProps = (dispatch) => ({
  update_page: (page) => dispatch(updateCoursesPage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
