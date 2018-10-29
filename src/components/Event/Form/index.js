
import React from 'react'
import CKEditor from 'react-ckeditor-component'
import Layout from 'pages/Layout'
import { LabeledInput } from 'components/FormUtils'
import styles from './style.scss'

const Form = props => (
  <Layout scroll={false}>
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
                className={`text-center clickable ${styles.uploadPicture} p-5`}
                onClick={() => props.imageUploadRef.current.click()}
              >
                {
                  props.uploadedImageUrl
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
                    <option value=''>類型</option>
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
                    required
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
                    required
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
                    onChange={e => props.updatePayload({ begin_time: e.target.value })}
                    className='form-control'
                    placeholder='必填'
                    type='date'
                    required
                  />
                </div>
                <label className='col-sm-2 control-label text-right'>結束時間</label>
                <div className='col-4'>
                  <input
                    value={props.payload.end_time || ''}
                    onChange={e => props.updatePayload({ end_time: e.target.value })}
                    className='form-control'
                    placeholder='必填'
                    type='date'
                    required
                  />
                </div>
              </div>
            </div>
            <LabeledInput label='內容'>
              <CKEditor
                activeClass='p10'
                content={props.payload.content || ''}
                events={{ change: (e) => props.updatePayload({ content: e.editor.getData() }) }}
              />
            </LabeledInput>
            <div className='col-12 text-right'>
              <button type='submit' className='btn btn-success btn-large' onClick={props.onSubmit}>送出</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default Form
