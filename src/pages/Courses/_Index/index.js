
import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import classNames from 'classnames'
import Layout from 'pages/Layout'
import { SearchCourse } from 'components/Search'
import * as Course from 'components/Course'
import courseActions from 'api/Actions/Courses'
import { getCourses } from 'api/Controllers/courses'
import styles from './style.scss'

const Index = ({ courses, updatePage }) => (
  <Layout className={styles.course}>
    <div className='container'>
      <div className={classNames('text-center', styles.searchWrapper)}>
        <SearchCourse show_semester />
      </div>
      <Course.Table {...courses} updatePage={updatePage} />
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
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
      }
    }
  })
)

export default enhance(Index)
