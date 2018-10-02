
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { getCourseMap, patchCourseMap, actions } from 'api/Actions/CourseMaps'
import { FETCHING_STATUS } from 'utilities/constants'
import Form from 'components/Admin/CourseMap/EditForm'

const mapStateToProps = (state) => ({
  courseMap: state.courseMaps.show.data,
  status: state.courseMaps.show.status,
  courseMapUpdateStatus: state.courseMaps.patch.status
})

const mapDispatchToProps = (dispatch) => ({
  getCourseMap: (id) => dispatch(getCourseMap(id)),
  patchCourseMap: (payload, id) => dispatch(patchCourseMap(payload, id)),
  patchCourseMapReset: () => dispatch(actions.courseMaps.patch.setStatus(FETCHING_STATUS.IDLE))
})

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withState('payload', 'setPayload', {

  }),
  withHandlers({
    updatePayload: ({ setPayload }) => payload => setPayload(previous => ({ ...previous, ...payload }))
  }),
  lifecycle({
    componentDidMount: function () {
      this.props.getCourseMap(this.props.match.params.id)
    },
    componentDidUpdate: function () {
      if (this.props.status === FETCHING_STATUS.DONE) {
        this.props.patchCourseMapReset()
      }
    }
  })
)

export default enhance(Form)
