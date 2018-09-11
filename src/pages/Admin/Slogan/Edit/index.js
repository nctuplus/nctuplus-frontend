
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withProps, withHandlers, lifecycle } from 'recompose'
import { getSlogan, patchSlogan, patchSloganReset } from 'api/Actions/Slogans'
import { FETCHING_STATUS } from 'utilities/constants'
import Form from 'components/Admin/Slogan/Form'

const mapStateToProps = (state) => ({
  slogan: state.slogans.show.data,
  status: state.slogans.show.status,
  sloganUpdateStatus: state.slogans.patch.status
})

const mapDispatchToProps = (dispatch) => ({
  getSlogan: (id) => dispatch(getSlogan(id)),
  patchSlogan: (payload, id) => dispatch(patchSlogan(payload, id)),
  patchSloganReset: () => dispatch(patchSloganReset())
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
        this.props.patchSloganReset()
        this.props.history.push('/admin/slogan/')
      }
    }
  })
)

export default enhance(Form)
