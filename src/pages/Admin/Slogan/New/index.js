
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withProps, withHandlers, lifecycle } from 'recompose'
import { postSlogan } from 'api/Controllers/slogans'
import actions from 'api/Actions/Slogans'
import { FETCHING_STATUS } from 'utilities/constants'
import Form from 'components/Admin/Slogan/Form'

const mapStateToProps = (state) => ({
  slogan: state.slogans.new.data,
  status: state.slogans.new.status
})

const mapDispatchToProps = (dispatch) => ({
  postSlogan: (payload) => dispatch(postSlogan(payload)),
  postSloganReset: () => dispatch(actions.slogans.new.setStatus(FETCHING_STATUS.IDLE))
})

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withState('payload', 'setPayload', {
    title: '',
    display: true
  }),
  withProps({ formRef: React.createRef() }),
  withHandlers({
    updatePayload: ({ setPayload }) => payload => setPayload(previous => ({ ...previous, ...payload })),
    onSubmit: ({ formRef, payload, postSlogan }) => event => {
      // only works on chrome, but who care others? ;)
      formRef.current.reportValidity()

      if (payload.title) {
        // 讓表單不要照預設方法送出
        event.preventDefault()
        postSlogan(payload)
      }
    }
  }),
  lifecycle({
    componentDidUpdate: function () {
      if (this.props.status === FETCHING_STATUS.DONE) {
        this.props.postSloganReset()
        this.props.history.push('/admin/slogan')
      }
    }
  })
)

export default enhance(Form)
