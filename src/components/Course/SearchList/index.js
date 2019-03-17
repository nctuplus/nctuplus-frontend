
import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import Pagination from 'components/Pagination'
import { getSearchCourses } from 'api/Controllers/courses'
import actions from 'api/Actions/Courses'

const mapStateToProps = (state) => ({
  courses: state.courses.search
})

const mapDispatchToProps = (dispatch) => ({
  getCourses: (payload) => dispatch(getSearchCourses(payload)),
  updatePage: (page) => dispatch(actions.courses.search.updatePage(page))
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount () {
      this.props.getCourses({ ...this.props.filter, page: 1 })
    },
    componentDidUpdate (prevProps) {
      if (this.props.courses.page !== prevProps.courses.page) {
        this.props.getCourses({ ...this.props.filter, page: this.props.courses.page })
      }
    }
  })
)

const SearchListMultiple = enhance(props => (
  <div>
    <div className='modal-header'>
      <h5 className='modal-title'>選擇適用課程及老師</h5>
    </div>
    <div className='modal-body'>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th />
            <th>課程</th>
            <th>老師</th>
          </tr>
        </thead>
        <tbody>
          {
            props.courses.data.map((course) => (
              <tr key={course.id}>
                <td className='py-0 align-middle'>
                  <input
                    type='checkbox'
                    id={course.id}
                    defaultChecked={props.findSearchCourse(course.id)}
                    onClick={() => props.findSearchCourse(course.id)
                      ? props.removeSearchCourse(course.id)
                      : props.addSearchCourse(course)}
                  />
                </td>
                <td className='p-0 align-middle'>
                  <label className='p-2 m-0 w-100' htmlFor={course.id}>{course.permanent_course.name}</label>
                </td>
                <td className='p-0 align-middle'>
                  <label className='p-2 m-0 w-100' htmlFor={course.id}>
                    {
                      course.teachers &&
                      course.teachers.map(teacher => teacher.name).join(', ')
                    }
                  </label>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Pagination
        page={props.courses.page}
        maxPage={props.courses.maxPage}
        to={(page) => props.updatePage(page)}
      />
    </div>
  </div>
))

const SearchListSingle = enhance(props => (
  <div>
    <div className='modal-header'>
      <h5 className='modal-title'>選擇適用課程及老師</h5>
    </div>
    <div className='modal-body'>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>課程</th>
            <th>老師</th>
          </tr>
        </thead>
        <tbody>
          {
            props.courses.data.map((course, index) => (
              <tr key={course.id} onClick={() => props.chooseSearchCourse(course)}>
                <td className='p-0 align-middle'>
                  <label className='p-2 m-0 w-100' htmlFor={course.id}>{course.permanent_course.name}</label>
                </td>
                <td className='p-0 align-middle'>
                  <label className='p-2 m-0 w-100' htmlFor={course.id}>
                    {
                      course.teachers &&
                      course.teachers.map(teacher => teacher.name).join(', ')
                    }
                  </label>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Pagination
        page={props.courses.page}
        maxPage={props.courses.maxPage}
        to={(page) => props.updatePage(page)}
      />
    </div>
  </div>
))

export { SearchListMultiple, SearchListSingle }
