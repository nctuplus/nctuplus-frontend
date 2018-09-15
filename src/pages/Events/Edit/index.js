
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, lifecycle, withHandlers, withProps } from 'recompose'
import { base64encode } from 'utilities'
import { getEvent, patchEvent } from 'api/Controllers/events'
import actions from 'api/Actions/Events'
import { FETCHING_STATUS } from 'utilities/constants'
import Form from 'components/Event/Form'

const mapStateToProps = (state) => ({
  event: state.events.show.data,
  status: state.events.show.status,
  eventUpdateStatus: state.events.edit.status
})

const mapDispatchToProps = (dispatch) => ({
  getEvent: (id) => dispatch(getEvent(id)),
  patchEvent: (payload, id) => dispatch(patchEvent(payload, id)),
  patchEventReset: () => dispatch(actions.events.edit.setStatus(FETCHING_STATUS.FAIL))
})

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withState('payload', 'setPayload', {
    event_type: '',
    title: '',
    url: '',
    organization: '',
    location: '',
    begin_time: '',
    end_time: '',
    cover_image: '',
    content: ''
  }),
  withState('fileUploadStatus', 'setFileUploadStatus', 'none'),
  withState('uploadedImageUrl', 'setUploadedImageUrl', null),
  withState('synced', 'setSynced', false),
  withProps(({ formRef: React.createRef(), imageUploadRef: React.createRef() })),
  withHandlers({
    updatePayload: ({ setPayload }) => payload => setPayload(previous => ({ ...previous, ...payload })),
    onFileUpload: ({ setFileUploadStatus, setPayload, imageUploadRef, setUploadedImageUrl }) => () => {
      setFileUploadStatus('uploading')
      const file = imageUploadRef.current.files[0]
      base64encode(file)
        .then(encoded => {
          setPayload(previous => ({ ...previous, cover_image: encoded }))
          setFileUploadStatus('done')
          setUploadedImageUrl(URL.createObjectURL(file))
        })
    },
    onSubmit: ({ formRef, fileUploadStatus, payload, patchEvent, match }) => event => {
      // only works on chrome, but who care others? ;)
      formRef.current.reportValidity()

      // 檔案還沒上傳並編碼完前不送出
      if (fileUploadStatus === 'uploading') return

      if (payload.title && payload.event_type && payload.organization && payload.location && payload.begin_time && payload.end_time) {
        // 讓表單不要照預設方法送出
        event.preventDefault()
        patchEvent(payload, match.params.id)
      }
    }
  }),
  lifecycle({
    componentDidUpdate: function () {
      const props = this.props

      if (props.status === FETCHING_STATUS.DONE && !props.synced) {
        setTimeout(() => props.setPayload(payload => ({ ...payload, ...props.event })), 100)

        if (props.event.cover_image) {
          props.setUploadedImageUrl(props.event.cover_image.url)
        }
        props.setSynced(true)
      }
      if (props.eventUpdateStatus === FETCHING_STATUS.DONE) {
        props.patchEventReset()
        props.history.push(`/events/${props.payload.id}`)
      }
    },
    componentDidMount: function () {
      this.props.getEvent(this.props.match.params.id)
    }
  })
)

export default enhance(Form)
