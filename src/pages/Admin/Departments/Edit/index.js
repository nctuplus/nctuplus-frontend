
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withProps, withHandlers, lifecycle } from 'recompose'
import Form from 'components/Admin/Department/Form'
import { getDepartment, patchDepartment } from 'api/Controllers/departments'
import actions from 'api/Actions/Departments'
import { FETCHING_STATUS } from 'utilities/constants'

const mapStateToProps = (state) => ({
  department: state.departments.show.data,
  fetchStatus: state.departments.show.status,
  updateStatus: state.departments.edit.status
})

const mapDispatchToProps = (dispatch) => ({
  getDepartment: (id) => dispatch(getDepartment(id)),
  patchDepartment: (payload, id) => dispatch(patchDepartment(payload, id)),
  patchDepartmentReset: () => dispatch(actions.departments.edit.setStatus(FETCHING_STATUS.IDLE))
})

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withState('payload', 'setPayload', {

  }),
  withProps({ action: '更新' }),
  withHandlers({
    updatePayload: ({ setPayload }) => payload => setPayload(previous => ({ ...previous, ...payload }))
  }),
  lifecycle({
    componentDidUpdate: function () {
      if (this.props.fetchStatus === FETCHING_STATUS.DONE) {
        this.props.patchDepartmentReset()
        this.props.history.push('/admin/departments/')
      }
    }
  })
)

export default enhance(Form)
