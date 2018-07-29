
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'
import CKEditor from 'react-ckeditor-component'
import PageWrapper from '../../../Components/PageWrapper'
import { LabeledInput } from '../../../Components/FormUtils'
import { getEvent, patchEvent, patchEventReset } from '../../../Redux/Actions/Events'
import { FETCHING_STATUS } from '../../../constants'
import './style.scss'

class Edit extends React.Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      ckeditorContent: ''
    }
  }

  componentWillMount () {
    this.setState({
      ckeditorContent: this.props.event.content
    })
  }

  componentDidMount () {
    this.props.get_event(this.props.match.params.id)
  }

  onChange (event) {
    this.setState({
      ckeditorContent: event.editor.getData()
    })
  }

  handleSubmit (event) {
    let payload = {
      event_type: this.refs.event_type.value,
      title: this.refs.title.value,
      url: this.refs.url.value,
      organization: this.refs.organization.value,
      location: this.refs.location.value,
      begin_time: this.refs.begin_time.value,
      end_time: this.refs.end_time.value,
      content: this.state.ckeditorContent
    }

    if ((payload.title !== '') && (payload.event_type !== '')) {
      // 讓表單不要照預設方法送出
      event.preventDefault()
      this.props.patch_event(payload, this.props.match.params.id)
    }
  }

  render () {
    console.log(this.props.event.begin_time.slice(0, 10))
    let event = this.props.event

    if (this.props.status_patch === FETCHING_STATUS.DONE) {
      this.props.patch_event_reset()
      return (<Redirect to={`/events/${this.props.match.params.id}`} />)
    }

    return (
      <PageWrapper>
        <div className='container bg-white'>
          <div className='row'>
            <div className='col-md-9 offset-1'>
              <div className='title offset-1'>
                編輯活動
              </div>
              <form>
                <LabeledInput label='圖片'>
                  <input accept='image/*' type='file' hidden />
                  <div className='text-center clickable upload-picture' >
                    點選以上傳,建議800x400以達最佳效果(需小於2MB)
                  </div>
                </LabeledInput>
                <LabeledInput label='類型/名稱'>
                  <div className='input-group'>
                    <div className='input-group-prepend'>
                      <select ref='event_type' defaultValue={event.event_type} required>
                        <option value='校友週'>校友週</option>
                        <option value='講座'>講座</option>
                        <option value='表演'>表演</option>
                        <option value='擺攤'>擺攤</option>
                        <option value='比賽'>比賽</option>
                        <option value='其他'>其他</option>
                      </select>
                    </div>
                    <input ref='title' className='form-control' placeholder='必填' type='text' defaultValue={event.title} required />
                  </div>
                </LabeledInput>
                <LabeledInput label='活動網址'>
                  <input ref='url' className='form-control' placeholder='選填' type='text' defaultValue={event.url} />
                </LabeledInput>
                <div className='form-group'>
                  <div className='row'>
                    <label className='col-sm-2 control-label text-right' >主辦單位</label>
                    <div className='col-4'>
                      <input ref='organization' className='form-control' placeholder='必填' type='text' defaultValue={event.organization} />
                    </div>
                    <label className='col-sm-2 control-label text-right'>地點</label>
                    <div className='col-4'>
                      <input ref='location' className='form-control' placeholder='必填' type='text' defaultValue={event.location} />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='row'>
                    <label className='col-sm-2 control-label text-right'>開始時間</label>
                    <div className='col-4'>
                      <input ref='begin_time' className='form-control' placeholder='必填' type='date' defaultValue={event.begin_time} />
                    </div>
                    <label className='col-sm-2 control-label text-right'>結束時間</label>
                    <div className='col-4'>
                      <input ref='end_time' className='form-control' placeholder='必填' type='date' defaultValue={event.end_time} />
                    </div>
                  </div>
                </div>
                <LabeledInput label='內容'>
                  <CKEditor activeClass='p10' content={this.state.ckeditorContent} events={{'change': this.onChange}} />
                </LabeledInput>
                <div className='col-12 text-right'>
                  <button type='submit' className='btn btn-success btn-large' onClick={this.handleSubmit}>送出</button>
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
  event: state.events.show.data,
  status: state.events.show.status,
  status_patch: state.events.patch.status
})

const mapDispatchToProps = (dispatch) => ({
  get_event: (id) => dispatch(getEvent(id)),
  patch_event: (payload, id) => dispatch(patchEvent(payload, id)),
  patch_event_reset: () => dispatch(patchEventReset())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit))
