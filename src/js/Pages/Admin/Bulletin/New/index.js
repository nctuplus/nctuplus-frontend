
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { postBulletin, postBulletinReset } from '../../../../Redux/Actions/Events'
import { FETCHING_STATUS } from '../../../../constants'
import Form from '../../../../Components/Admin/Bulletin/Form'

const mapStateToProps = (state) => ({
  status: state.bulletins.post.status
})

const mapDispatchToProps = (dispatch) => ({
  postBulletin: (payload) => dispatch(postBulletin(payload)),
  postBulletinReset: () => dispatch(postBulletinReset())
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
        this.props.postBulletinReset()
        this.props.history.push('/admin/bulletin/')
      }
    }
  })
)

export default enhance(Form)
