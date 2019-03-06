
import React from 'react'
import Layout from 'pages/Layout'
import * as PastExams from 'components/PastExam'
import { ModalWrapper } from 'components/Modal'
import { ToastWrapper } from 'components/Toast'

const Form = (props) => (
  <Layout>
    <ModalWrapper />
    <ToastWrapper />
    <div className='container bg-white p-4'>
      <h4>Step1.選擇適用課程</h4>
      <form>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>適用課程</span>
          </div>
          <input
            className='form-control'
            placeholder='搜尋課名（交大專用）'
            value={props.keyword}
            onChange={(e) => props.updateKeyword(e.target.value)}
            required
          />
          <div className='input-group-append'>
            <button className='btn btn-default' onClick={props.onSearch}>搜尋</button>
          </div>
        </div>
        {
          props.payload.course &&
          <div className='my-2'>
            <i className='fa fa-check-circle mx-2' />
            {props.payload.course.name}
          </div>
        }
      </form>

      <hr className='my-4' />

      <h4>Step2.上傳檔案及填寫說明</h4>
      <PastExams.FileList
        payload={props.payload}
        fileInfo={props.fileInfo}
        updatePayload={props.updatePayload}
      />
      <PastExams.Upload
        payload={props.payload}
        fileUploadRef={props.fileUploadRef}
        updatePayload={props.updatePayload}
        onFileUpload={props.onFileUpload}
        onSubmit={props.onSubmit}
      />

    </div>
  </Layout>
)

export default Form
