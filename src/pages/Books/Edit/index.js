
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, lifecycle, withHandlers, withProps } from 'recompose'
// import { base64encode } from 'utilities'
// import { FETCHING_STATUS } from 'constants'
import Form from 'components/Book/Form'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withState('payload', 'setPayload', {

  }),
  withState('fileUploadStatus', 'setFileUploadStatus', 'none'),
  withState('uploadedImageUrl', 'setUploadedImageUrl', null),
  withState('synced', 'setSynced', false),
  withProps(({ formRef: React.createRef(), imageUploadRef: React.createRef() })),
  withHandlers({
    updatePayload: ({ setPayload }) => payload => setPayload(previous => ({ ...previous, ...payload })),
    /* onFileUpload: ({ setFileUploadStatus, setPayload, imageUploadRef, setUploadedImageUrl }) => () => {
      setFileUploadStatus('uploading')
      const file = imageUploadRef.current.files[0]
      base64encode(file)
        .then(encoded => {
          setPayload(previous => ({ ...previous, cover_image: encoded }))
          setFileUploadStatus('done')
          setUploadedImageUrl(URL.createObjectURL(file))
        })
    }, */
    onSubmit: ({ formRef, fileUploadStatus, payload, patchEvent, match }) => event => {
      // only works on chrome, but who care others? ;)
      formRef.current.reportValidity()

      // 檔案還沒上傳並編碼完前不送出
      if (fileUploadStatus === 'uploading') return

      if (payload.name) {
        // 讓表單不要照預設方法送出
        event.preventDefault()
        patchEvent(payload, match.params.id)
      }
    }
  }),
  lifecycle({
    componentDidUpdate: function () {
      /* const props = this.props

      if (props.status === FETCHING_STATUS.DONE && !props.synced) {
        props.setPayload(payload => ({ ...payload, ...props.event }))

        if (props.event.cover_image) {
          props.setUploadedImageUrl(props.event.cover_image.url)
        }
        props.setSynced(true)
      }
      if (props.eventUpdateStatus === FETCHING_STATUS.DONE) {
        props.patchEventReset()
        props.history.push(`/events/${props.payload.id}`)
      } */
    },
    componentDidMount: function () {
      // this.props.getBook(this.props.match.params.id)
    }
  })
)

export default enhance(Form)
