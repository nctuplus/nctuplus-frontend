
import React from 'react'

const Upload = (props) => (
  <div className='card'>
    <div className='card-header'>
      <h4>上傳檔案</h4>
    </div>
    <div className='card-body'>
      <div className='card-text p-3'>
        <h5>請尊重智慧財產權!</h5>
        <p>
          本區只開放上傳考古題及作業，若上傳非相關檔案或未授權檔案後果請自行負責!<br />
          目前支援的格式有: doc(x)/ppt(x)/pdf/jp(e)g/png/zip/rar<br />
          若有多個檔案請壓縮成一個檔案再上傳，檔案的大小限制為10MB
        </p>
        <div>
          <label>
            <input
              checked={props.payload.anonymity}
              onChange={() => props.updatePayload({ anonymity: !props.payload.anonymity })}
              className='mx-2'
              type='checkbox'
            />
            匿名上傳
          </label>
        </div>
        <div className='btn-toolbar'>
          <button
            className='btn btn-sm btn-success'
            onClick={() => props.fileUploadRef.current.click()}
          >
            <i className='fa fa-plus mx-1' />
            <span>新增檔案</span>
            <input
              ref={props.fileUploadRef}
              onChange={props.onFileUpload}
              type='file'
              accept='.doc, .docx, .ppt, .pptx, .pdf, .jpg, .jpeg, .png, .zip, .rar'
              hidden
            />
          </button>
          <button
            className='btn btn-sm btn-primary mx-1'
            onClick={props.onSubmit}
          >
            <i className='fa fa-arrow-up mx-1' />
            <span>確認上傳</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Upload
