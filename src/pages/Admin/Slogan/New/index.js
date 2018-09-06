
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withProps, withHandlers, lifecycle } from 'recompose'
import { postSlogan, postSloganReset } from 'redux/Actions/Slogans'
import { FETCHING_STATUS } from 'utilities/constants'
import Form from 'components/Admin/Slogan/Form'

const mapStateToProps = (state) => ({
  status: state.slogans.post.status
})

const mapDispatchToProps = (dispatch) => ({
  postSlogan: (payload) => dispatch(postSlogan(payload)),
  postSloganReset: () => dispatch(postSloganReset())
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
        this.props.postSloganReset()
        this.props.history.push('/admin/slogan/')
      }
    }
  })
)

export default enhance(Form)
