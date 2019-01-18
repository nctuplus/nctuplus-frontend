
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withProps, withHandlers, lifecycle } from 'recompose'
import { getSlogan, patchSlogan } from 'api/Controllers/slogans'
import actions from 'api/Actions/Slogans'
import { FETCHING_STATUS } from 'utilities/constants'
import Form from 'components/Admin/Slogan/Form'

const mapStateToProps = (state) => ({
  slogan: state.slogans.show.data,
  status: state.slogans.show.status,
  sloganUpdateStatus: state.slogans.edit.status
})

const mapDispatchToProps = (dispatch) => ({
  getSlogan: (id) => dispatch(getSlogan(id)),
  patchSlogan: (payload, id) => dispatch(patchSlogan(payload, id)),
  patchSloganReset: () => dispatch(actions.slogans.edit.setStatus(FETCHING_STATUS.IDLE))
})

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withState('payload', 'setPayload', {
    title: '',
    display: true
  }),
  withState('synced', 'setSynced', false),
  withProps({ formRef: React.createRef() }),
  withHandlers({
    updatePayload: ({ setPayload }) => payload => setPayload(previous => ({ ...previous, ...payload })),
    onSubmit: ({ formRef, payload, patchSlogan, match }) => event => {
      // only works on chrome, but who care others? ;)
      formRef.current.reportValidity()

      if (payload.title) {
        // 讓表單不要照預設方法送出
        event.preventDefault()
        patchSlogan(payload, match.params.id)
      }
    }
  }),
  lifecycle({
    componentDidUpdate: function () {
      const props = this.props

      if (props.status === FETCHING_STATUS.DONE && !props.synced) {
        setTimeout(() => props.setPayload(payload => ({ ...payload, ...props.slogan })), 100)
        props.setSynced(true)
      }
      if (props.sloganUpdateStatus === FETCHING_STATUS.DONE) {
        props.patchSloganReset()
        props.history.push('/admin/slogan')
      }
    },
    componentDidMount: function () {
      this.props.getSlogan(this.props.match.params.id)
    }
  })
)

export default enhance(Form)
