
import React from 'react'
import PageWrapper from '../../../Components/PageWrapper'
import { SearchCourse } from '../../../Components/Search'
import { CourseTable } from '../../../Components/Course'
import Spinner from '../../../Components/Spinner'
import './style.scss'

import { connect } from 'react-redux'
import courseActions from '../../../Redux/Actions/Courses'

const Index = (props) => {
  props.courses.status || props.fetch_data()
  return (
    <PageWrapper className='course'>
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
    </PageWrapper>
  )
}

const mapStateToProps = (state) => ({
  courses: state.courses.all
})

const mapDispatchToProps = (dispatch) => ({
  fetch_data: (page) => dispatch(courseActions.index.fetch(page)),
  update_page: (page) => dispatch(courseActions.index.updatePage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
