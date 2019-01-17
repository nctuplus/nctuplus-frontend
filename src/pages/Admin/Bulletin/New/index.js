
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withProps, withHandlers, lifecycle } from 'recompose'
import { postBulletin } from 'api/Controllers/bulletins'
import actions from 'api/Actions/Bulletins'
import { FETCHING_STATUS } from 'utilities/constants'
import Form from 'components/Admin/Bulletin/Form'

const mapStateToProps = (state) => ({
  bulletin: state.bulletins.new.data,
  status: state.bulletins.new.status
})

const mapDispatchToProps = (dispatch) => ({
  postBulletin: (payload) => dispatch(postBulletin(payload)),
  postBulletinReset: () => dispatch(actions.bulletins.new.setStatus(FETCHING_STATUS.IDLE))
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
  withProps({ action: '新增', formRef: React.createRef() }),
  withHandlers({
    updatePayload: ({ setPayload }) => payload => setPayload(previous => ({ ...previous, ...payload })),
    onSubmit: ({ formRef, payload, postBulletin }) => event => {
      // only works on chrome, but who care others? ;)
      formRef.current.reportValidity()

      if (payload.title) {
        // 讓表單不要照預設方法送出
        event.preventDefault()
        postBulletin(payload)
      }
    }
  }),
  lifecycle({
    componentDidUpdate: function () {
      if (this.props.status === FETCHING_STATUS.DONE) {
        this.props.postBulletinReset()
        this.props.history.push('/admin/bulletin')
      }
    }
  })
)

export default enhance(Form)
