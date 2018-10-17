
import React from 'react'
import Layout from 'pages/Layout'
import { SearchCourse } from 'components/Search'
import * as Course from 'components/Course'
import Spinner from 'components/Spinner'
import classNames from 'classnames'
import styles from './style.scss'

import { connect } from 'react-redux'
import courseActions from 'api/Actions/Courses'
import { getCourses } from 'api/Controllers/courses'
import { compose, lifecycle } from 'recompose'

const Index = ({ courses, updatePage }) => (
  <Layout className={styles.course}>
    <div className='container'>
      <div className={classNames('text-center', styles.searchWrapper)}>
        <SearchCourse show_semester />
      </div>
      {
        courses.status
          ? <Course.Table {...courses} updatePage={updatePage} />
          : <div className='text-center'><Spinner size={48} color='grey' /></div>
      }
    </div>
  </Layout>
)

const mapStateToProps = (state) => ({
  courses: state.courses.index
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: (page) => dispatch(getCourses(page)),
  updatePage: (page) => dispatch(courseActions.courses.index.updatePage(page))
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount () {
      this.props.fetchData(1)
    },
    componentDidUpdate (prevProps) {
      if (this.props.courses.page !== prevProps.courses.page) {
        this.props.fetchData(this.props.courses.page)
      }
    }
  })
)

export default enhance(Index)
