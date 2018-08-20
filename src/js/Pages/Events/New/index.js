
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import CKEditor from 'react-ckeditor-component'
import { compose, withState, lifecycle, withHandlers, withProps } from 'recompose'
import { base64encode } from '../../../Utilities'
import PageWrapper from '../../../Components/PageWrapper'
import { LabeledInput } from '../../../Components/FormUtils'
import { postEvent, postEventReset } from '../../../Redux/Actions/Events'
import { FETCHING_STATUS } from '../../../constants'
import './style.scss'

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
  withState('uploadedImageUrl', 'setUploadedImageUrl', 'none'),
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

const New = props => (
  <PageWrapper>
    <div className='container bg-white pt-5'>
      <div className='row'>
        <div className='col-md-9 offset-1'>
          <div className='h3 offset-1'>
            新增活動
          </div>
          <form ref={props.formRef}>
            <LabeledInput label='圖片'>
              <input
                ref={props.imageUploadRef}
                accept='image/*' type='file' hidden
                onChange={props.onFileUpload}
              />
              <div
                className='text-center clickable upload-picture p-5'
                onClick={() => props.imageUploadRef.current.click()}
              >
                {
                  props.fileUploadStatus === 'done'
                    ? <img src={props.uploadedImageUrl} className='img-fluid' />
                    : '點選以上傳,建議800x400以達最佳效果(需小於2MB)'
                }
              </div>
            </LabeledInput>
            <LabeledInput label='類型/名稱'>
              <div className='input-group'>
                <div className='input-group-prepend'>
                  <select
                    value={props.payload.event_type}
                    onChange={e => props.updatePayload({ event_type: e.target.value })}
                    required
                  >
                    <option value='0'>類型</option>
                    <option value='1'>校友週</option>
                    <option value='2'>講座</option>
                    <option value='3'>表演</option>
                    <option value='4'>擺攤</option>
                    <option value='5'>比賽</option>
                    <option value='6'>其他</option>
                  </select>
                </div>
                <input
                  value={props.payload.title}
                  onChange={e => props.updatePayload({ title: e.target.value })}
                  className='form-control'
                  placeholder='必填'
                  type='text'
                  required
                />
              </div>
            </LabeledInput>
            <LabeledInput label='活動網址'>
              <input
                value={props.payload.url}
                onChange={e => props.updatePayload({ url: e.target.value })}
                className='form-control'
                placeholder='選填'
                type='text'
              />
            </LabeledInput>
            <div className='form-group'>
              <div className='row'>
                <label className='col-sm-2 control-label text-right' >主辦單位</label>
                <div className='col-4'>
                  <input
                    value={props.payload.organization || ''}
                    onChange={e => props.updatePayload({ organization: e.target.value })}
                    className='form-control'
                    placeholder='必填'
                    type='text'
                  />
                </div>
                <label className='col-sm-2 control-label text-right'>地點</label>
                <div className='col-4'>
                  <input
                    value={props.payload.location || ''}
                    onChange={e => props.updatePayload({ location: e.target.value })}
                    className='form-control'
                    placeholder='必填'
                    type='text'
                  />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <div className='row'>
                <label className='col-sm-2 control-label text-right'>開始時間</label>
                <div className='col-4'>
                  <input
                    value={props.payload.begin_time || ''}
                    onChange={e => props.updatePayload({begin_time: e.target.value})}
                    className='form-control'
                    placeholder='必填'
                    type='date'
                  />
                </div>
                <label className='col-sm-2 control-label text-right'>結束時間</label>
                <div className='col-4'>
                  <input
                    value={props.payload.end_time || ''}
                    onChange={e => props.updatePayload({end_time: e.target.value})}
                    className='form-control'
                    placeholder='必填'
                    type='date'
                  />
                </div>
              </div>
            </div>
            <LabeledInput label='內容'>
              <CKEditor
                activeClass='p10'
                content={props.payload.content || ''}
                events={{change: (e) => props.updatePayload({ content: e.editor.getData() })}}
              />
            </LabeledInput>
            <div className='col-12 text-right'>
              <button type='submit' className='btn btn-success btn-large' onClick={props.onSubmit}>送出</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </PageWrapper>
)

export default enhance(New)
