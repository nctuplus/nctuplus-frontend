
import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import Pagination from 'components/Pagination'
import { getSearchCourses } from 'api/Controllers/courses'
import actions from 'api/Actions/Courses'

const SearchList = props => (
  <div>
    <div className='modal-header'>
      <h5 className='modal-title'>選擇適用課程及老師</h5>
    </div>
    <div className='modal-body'>
      <table className='table table-hover'>
        <tbody>
          <tr>
            <td />
            <th>課程</th>
            <th>老師</th>
          </tr>
          {
            props.courses.data.slice(0, 10).map((course, index) => (
              <tr key={index}>
                <td><input type='checkbox' /></td>
                <td>{course.permanent_course.name}</td>
                <td>{course.teacher}</td>
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
)

const mapStateToProps = (state) => ({
  courses: state.courses.search
})

const mapDispatchToProps = (dispatch) => ({
  getCourses: (page) => dispatch(getSearchCourses(page)),
  updatePage: (page) => dispatch(actions.courses.search.updatePage(page))
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount () {
      this.props.getCourses(1)
    },
    componentDidUpdate (prevProps) {
      if (this.props.courses.page !== prevProps.courses.page) {
        this.props.getCourses(this.props.courses.page)
      }
    }
  })
)

export default enhance(SearchList)
