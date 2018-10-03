
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { postCourseMap, postCourseMapsReset } from 'api/Actions/CourseMaps'
import { FETCHING_STATUS } from 'utilities/constants'
import Form from 'components/Admin/CourseMap/NewForm'

const mapStateToProps = (state) => ({
  status: state.courseMaps.post.status
})

const mapDispatchToProps = (dispatch) => ({
  postCourseMap: (payload) => dispatch(postCourseMap(payload)),
  postCourseMapReset: () => dispatch(postCourseMapsReset)
})

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withState('payload', 'setPayload', {
    schedule: false
  }),
  withHandlers({
    updatePayload: ({ setPayload }) => payload => setPayload(previous => ({ ...previous, ...payload }))
  }),
  lifecycle({
    componentDidUpdate: function () {
      if (this.props.status === FETCHING_STATUS.DONE) {
        this.props.postCourseMapReset()
        this.props.history.push('/admin/course_maps/')
      }
    }
  })
)

export default enhance(Form)
