
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, lifecycle, withHandlers, withProps } from 'recompose'
import { base64encode } from '../../../Utilities'
import { postEvent, postEventReset } from '../../../Redux/Actions/Events'
import { FETCHING_STATUS } from '../../../constants'
import Form from '../../../Components/Event/Form'

const mapStateToProps = (state) => ({
  event: state.events.post.data,
  status: state.events.post.status
})

const mapDispatchToProps = (dispatch) => ({
  postEvent: (payload) => dispatch(postEvent(payload)),
  postEventReset: () => dispatch(postEventReset())
})

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withState('payload', 'setPayload', {
    event_type: 0,
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
    onSubmit: ({ formRef, fileUploadStatus, payload, postEvent }) => event => {
      // only works on chrome, but who care others? ;)
      formRef.current.reportValidity()
      // 讓表單不要照預設方法送出
      event.preventDefault()
      // 檔案還沒上傳並編碼完前不送出
      if (fileUploadStatus === 'uploading') return

      if (payload.title && payload.event_type && payload.organization && payload.location) {
        postEvent(payload)
      }
    }
  }),
  lifecycle({
    componentDidUpdate: function () {
      if (this.props.status === FETCHING_STATUS.DONE) {
        this.props.postEventReset()
        this.props.history.push(`/events/${this.props.event.id}`)
      }
    }
  })
)

export default enhance(Form)
