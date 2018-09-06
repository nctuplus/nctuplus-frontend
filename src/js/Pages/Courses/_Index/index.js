
import React from 'react'
import PageWrapper from '../../../Components/PageWrapper'
import { SearchCourse } from '../../../Components/Search'
import { CourseTable } from '../../../Components/Course'
import Spinner from '../../../Components/Spinner'
import './style.scss'

import { connect } from 'react-redux'
import courseActions from '../../../Redux/Actions/Courses'
import { compose, lifecycle } from 'recompose'

const Index = (props) => (
  <PageWrapper className='course'>
    <div className='container'>
      <div className='search-wrapper'>
        <SearchCourse show_semester />
      </div>
      {
        props.courses.status
          ? <CourseTable {...props.courses} updatePage={props.updatePage} />
          : <div className='text-center'><Spinner size={48} color='grey' /></div>
      }
    </div>
  </PageWrapper>
)

const mapStateToProps = (state) => ({
  courses: state.courses.all
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: (page) => dispatch(courseActions.index.fetch(page)),
  updatePage: (page) => dispatch(courseActions.index.updatePage(page))
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentDidMount () { this.props.fetchData() } })
)

export default enhance(Index)
