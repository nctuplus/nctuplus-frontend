
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withProps, withHandlers, lifecycle } from 'recompose'
import { getBulletin, patchBulletin } from 'api/Controllers/bulletins'
import { FETCHING_STATUS } from 'utilities/constants'
import Form from 'components/Admin/Bulletin/Form'

const mapStateToProps = (state) => ({
  bulletin: state.bulletins.show.data,
  status: state.bulletins.show.status,
  bulletinUpdateStatus: state.bulletins.edit.status
})

const mapDispatchToProps = (dispatch) => ({
  getBulletin: (id) => dispatch(getBulletin(id)),
  patchBulletin: (payload, id) => dispatch(patchBulletin(payload, id))
})

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withState('payload', 'setPayload', {
    schedule: false
  }),
  withProps({ action: '更新' }),
  withHandlers({
    updatePayload: ({ setPayload }) => payload => setPayload(previous => ({ ...previous, ...payload }))
  }),
  lifecycle({
    componentDidUpdate: function () {
      if (this.props.status === FETCHING_STATUS.DONE) {
        this.props.history.push('/admin/bulletin/')
      }
    }
  })
)

export default enhance(Form)
