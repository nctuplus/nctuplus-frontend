
import React from 'react'
import classNames from 'classnames'

const Upload = (props) => (
  <div className='card'>
    <div className='card-header'>
      <h3>上傳檔案</h3>
    </div>
    <div className='card-body'>

      <div className='card-text p-3'>
        <h4>請尊重智慧財產權!</h4>
        <p>
          本區只開放上傳考古題及作業，若上傳非相關檔案或未授權檔案後果請自行負責!<br />
          目前支援的格式有: doc(x)/ppt(x)/pdf/jp(e)g/png/zip/rar<br />
          每個檔案的大小限制為10MB
        </p>
        <div>
          <label>
            <input type='checkbox' /> 匿名上傳
          </label>
        </div>
        <div className='btn-toolbar'>
          <button className={classNames('btn', 'btn-sm', 'btn-success', props.disabled && 'disabled')}>
            <i className='fa fa-plus mx-1' />
            <span>新增檔案</span>
            <input type='file' hidden />
          </button>
          <button className={classNames('btn', 'btn-sm', 'btn-primary', props.disabled && 'disabled')}>
            <i className='fa fa-arrow-up mx-1' />
            <span>開始上傳</span>
          </button>
          <button className={classNames('btn', 'btn-sm', 'btn-warning', 'text-white', props.disabled && 'disabled')}>
            <i className='fa fa-remove mx-1' />
            <span>取消上傳</span>
          </button>
        </div>
      </div>

    </div>
  </div>
)

export default Upload
