
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withProps, withHandlers, lifecycle } from 'recompose'
import { postDepartment, postDepartmentReset } from 'redux/Actions/Departments'
import { FETCHING_STATUS } from 'utilities/constants'
import Form from 'components/Admin/Department/Form'

const mapStateToProps = (state) => ({
  status: state.departments.post.status
})

const mapDispatchToProps = (dispatch) => ({
  postDepartment: (payload) => dispatch(postDepartment(payload)),
  postDepartmentReset: () => dispatch(postDepartmentReset())
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
