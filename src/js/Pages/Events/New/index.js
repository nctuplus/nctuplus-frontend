
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import CKEditor from 'react-ckeditor-component'
import { base64encode } from '../../../Utilities'
import PageWrapper from '../../../Components/PageWrapper'
import { LabeledInput } from '../../../Components/FormUtils'
import { postEvent, postEventReset } from '../../../Redux/Actions/Events'

class New extends React.Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      ckeditorContent: ''
    }
  }

  onChange (event) {
    this.setState({
      ckeditorContent: event.editor.getData()
    })
  }

  async handleSubmit (event) {
    const coverImageUrl = this.refs.cover_image.files[0]
      ? await base64encode(this.refs.cover_image.files[0])
      : null
    let payload = {
      event_type: this.refs.event_type.value,
      title: this.refs.title.value,
      url: this.refs.url.value,
      organization: this.refs.organization.value,
      location: this.refs.location.value,
      begin_time: this.refs.begin_time.value,
      end_time: this.refs.end_time.value,
      cover_image: coverImageUrl,
      content: this.state.ckeditorContent
    }

    if ((payload.title !== '') && (payload.event_type !== '')) {
      // 讓表單不要照預設方法送出
      event.preventDefault()
      this.props.postEvent(payload)
    }
  }

  render () {
    return (
      <PageWrapper>
        <div className='container bg-white'>
          <div className='row'>
            <div className='col-md-9 offset-1'>
              <div className='title offset-1'>
                新增活動
              </div>
              <form>
                <LabeledInput label='圖片'>
                  <input ref='cover_image' accept='image/*' type='file' hidden />
                  <div
                    className='text-center clickable upload-picture'
                    onClick={() => this.refs.cover_image.click()}
                  >
                    點選以上傳,建議800x400以達最佳效果(需小於2MB)
                  </div>
                </LabeledInput>
                <LabeledInput label='類型/名稱'>
                  <div className='input-group'>
                    <div className='input-group-prepend'>
                      <select ref='event_type' required>
                        <option value='0'>類型</option>
                        <option value='1'>校友週</option>
                        <option value='2'>講座</option>
                        <option value='3'>表演</option>
                        <option value='4'>擺攤</option>
                        <option value='5'>比賽</option>
                        <option value='6'>其他</option>
                      </select>
                    </div>
                    <input ref='title' className='form-control' placeholder='必填' type='text' required />
                  </div>
                </LabeledInput>
                <LabeledInput label='活動網址'>
                  <input ref='url' className='form-control' placeholder='選填' type='text' />
                </LabeledInput>
                <div className='form-group'>
                  <div className='row'>
                    <label className='col-sm-2 control-label text-right' >主辦單位</label>
                    <div className='col-4'>
                      <input ref='organization' className='form-control' placeholder='必填' type='text' />
                    </div>
                    <label className='col-sm-2 control-label text-right'>地點</label>
                    <div className='col-4'>
                      <input ref='location' className='form-control' placeholder='必填' type='text' />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='row'>
                    <label className='col-sm-2 control-label text-right'>開始時間</label>
                    <div className='col-4'>
                      <input ref='begin_time' className='form-control' placeholder='必填' type='date' />
                    </div>
                    <label className='col-sm-2 control-label text-right'>結束時間</label>
                    <div className='col-4'>
                      <input ref='end_time' className='form-control' placeholder='必填' type='date' />
                    </div>
                  </div>
                </div>
                <LabeledInput label='內容'>
                  <CKEditor activeClass='p10' content={this.state.ckeditorContent} events={{'change': this.onChange}} />
                </LabeledInput>
                <div className='col-12 text-right'>
                  <button type='submit' className='btn btn-success btn-large' onClick={(e) => this.handleSubmit(e)}>送出</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  event: state.events.post.data,
  status: state.events.post.status
})

const mapDispatchToProps = (dispatch) => ({
  postEvent: (payload) => dispatch(postEvent(payload)),
  postEventReset: () => dispatch(postEventReset())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(New))
