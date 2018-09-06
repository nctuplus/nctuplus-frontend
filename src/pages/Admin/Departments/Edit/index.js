
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withProps, withHandlers, lifecycle } from 'recompose'
import { getDepartment, patchDepartment, patchDepartmentReset } from 'redux/Actions/Departments'
import { FETCHING_STATUS } from 'utilities/constants'
import Form from 'components/Admin/Department/Form'

const mapStateToProps = (state) => ({
  department: state.departments.show.data,
  status: state.departments.show.status,
  departmentUpdateStatus: state.departments.patch.status
})

const mapDispatchToProps = (dispatch) => ({
  getDepartment: (id) => dispatch(getDepartment(id)),
  patchDepartment: (payload) => dispatch(patchDepartment(payload)),
  patchDepartmentReset: () => dispatch(patchDepartmentReset())
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
      if (this.props.status === FETCHING_STATUS.DONE) {
        this.props.patchDepartmentReset()
        this.props.history.push('/admin/departments/')
      }
    }
  })
)

export default enhance(Form)
