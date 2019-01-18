
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose, withState, withProps, withHandlers, lifecycle } from 'recompose'
import { postBackground } from 'api/Controllers/backgrounds'
import actions from 'api/Actions/Backgrounds'
import { FETCHING_STATUS } from 'utilities/constants'
import { base64encode } from 'utilities'
import Form from 'components/Admin/Background/Form'

const mapStateToProps = (state) => ({
  background: state.backgrounds.new.data,
  status: state.backgrounds.new.status
})

const mapDispatchToProps = (dispatch) => ({
  postBackground: (payload) => dispatch(postBackground(payload)),
  postBackgroundReset: () => dispatch(actions.backgrounds.new.setStatus(FETCHING_STATUS.IDLE))
})

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withState('payload', 'setPayload', {
    cover_image: ''
  }),
  withState('fileUploadStatus', 'setFileUploadStatus', 'none'),
  withState('uploadedImageUrl', 'setUploadedImageUrl', null),
  withProps({ action: '新增', formRef: React.createRef(), imageUploadRef: React.createRef() }),
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
    onSubmit: ({ formRef, fileUploadStatus, payload, postBackground }) => event => {
      // only works on chrome, but who care others? ;)
      formRef.current.reportValidity()
      // 檔案還沒上傳並編碼完前不送出
      if (fileUploadStatus === 'uploading') return

      if (payload.cover_image) {
        // 讓表單不要照預設方法送出
        event.preventDefault()
        postBackground(payload)
      }
    }
  }),
  lifecycle({
    componentDidUpdate: function () {
      if (this.props.status === FETCHING_STATUS.DONE) {
        this.props.postBackgroundReset()
        this.props.history.push('/admin/background/')
      }
    }
  })
)

export default enhance(Form)
