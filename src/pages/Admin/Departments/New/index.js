
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withProps, withHandlers, lifecycle } from 'recompose'
import Form from 'components/Admin/Department/Form'
import { postDepartment } from 'api/Controllers/departments'
import actions from 'api/Actions/Departments'
import { FETCHING_STATUS } from 'utilities/constants'

const mapStateToProps = (state) => ({
  status: state.departments.new.status
})

const mapDispatchToProps = (dispatch) => ({
  postDepartment: (payload) => dispatch(postDepartment(payload)),
  postDepartmentReset: () => dispatch(actions.departments.new.setStatus(FETCHING_STATUS.IDLE))
})

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withState('payload', 'setPayload', {

  }),
  withProps({ action: '新增' }),
  withHandlers({
    updatePayload: ({ setPayload }) => payload => setPayload(previous => ({ ...previous, ...payload }))
  }),
  lifecycle({
    componentDidUpdate: function () {
      if (this.props.status === FETCHING_STATUS.DONE) {
        this.props.postDepartmentReset()
        this.props.history.push('/admin/departments/')
      }
    }
  })
)

export default enhance(Form)
