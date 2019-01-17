
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withProps, withHandlers, lifecycle } from 'recompose'
import { getBulletin, patchBulletin } from 'api/Controllers/bulletins'
import actions from 'api/Actions/Bulletins'
import { FETCHING_STATUS } from 'utilities/constants'
import Form from 'components/Admin/Bulletin/Form'

const mapStateToProps = (state) => ({
  bulletin: state.bulletins.show.data,
  status: state.bulletins.show.status,
  bulletinUpdateStatus: state.bulletins.edit.status
})

const mapDispatchToProps = (dispatch) => ({
  getBulletin: (id) => dispatch(getBulletin(id)),
  patchBulletin: (payload, id) => dispatch(patchBulletin(payload, id)),
  patchBulletinReset: () => dispatch(actions.bulletins.edit.setStatus(FETCHING_STATUS.IDLE))
})

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withState('payload', 'setPayload', {
    category: 0,
    title: '',
    begin_time: '',
    end_time: '',
    schedule: false
  }),
  withState('synced', 'setSynced', false),
  withProps({ formRef: React.createRef() }),
  withHandlers({
    updatePayload: ({ setPayload }) => payload => setPayload(previous => ({ ...previous, ...payload })),
    onSubmit: ({ formRef, payload, patchBulletin, match }) => event => {
      // only works on chrome, but who care others? ;)
      formRef.current.reportValidity()

      if (payload.title) {
        // 讓表單不要照預設方法送出
        event.preventDefault()
        patchBulletin(payload, match.params.id)
      }
    }
  }),
  lifecycle({
    componentDidUpdate: function () {
      const props = this.props

      if (props.status === FETCHING_STATUS.DONE && !props.synced) {
        setTimeout(() => props.setPayload(payload => ({ ...payload, ...props.bulletin })), 100)
        props.setSynced(true)
      }
      if (props.bulletinUpdateStatus === FETCHING_STATUS.DONE) {
        props.patchBulletinReset()
        props.history.push('/admin/bulletin')
      }
    },
    componentDidMount: function () {
      this.props.getBulletin(this.props.match.params.id)
    }
  })
)

export default enhance(Form)
