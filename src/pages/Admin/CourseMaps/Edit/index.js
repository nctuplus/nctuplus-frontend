
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import Form from 'components/Admin/CourseMap/EditForm'
import { getCourseMap, patchCourseMap } from 'api/Controllers/courseMaps'
import actions from 'api/Actions/CourseMaps'
import { FETCHING_STATUS } from 'utilities/constants'

const mapStateToProps = (state) => ({
  courseMap: state.courseMaps.show.data,
  fetchStatus: state.courseMaps.show.status,
  updateStatus: state.courseMaps.patch.status
})

const mapDispatchToProps = (dispatch) => ({
  getCourseMap: (id) => dispatch(getCourseMap(id)),
  patchCourseMap: (payload, id) => dispatch(patchCourseMap(payload, id)),
  patchCourseMapReset: () => dispatch(actions.courseMaps.edit.setStatus(FETCHING_STATUS.IDLE))
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
      if (this.props.fetchStatus === FETCHING_STATUS.DONE) {
        this.props.patchCourseMapReset()
      }
    }
  })
)

export default enhance(Form)
