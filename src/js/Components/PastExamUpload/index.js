
import React from 'react'

const PastExamTable = (props) => (
  <table className='table well'>
    <thead>
      <tr>
        <th className='text-center'>下載次數</th>
        <th className='text-center'>檔名</th>
        <th className='text-center'>年度</th>
        <th className='text-center'>檔案說明</th>
        <th className='text-center'>大小</th>
        <th className='text-center'>提供者</th>
        <th className='text-center'>上傳時間</th>
        <th className='text-center'>動作</th>
      </tr>
    </thead>
    <tbody className='files' >
      { props.children ? props.children : <tr className='text-center'>尚無檔案!</tr> }
    </tbody>
  </table>
)

const PastExamUpload = (props) => (
  <div className='panel panel-default'>
    <div className='panel-heading'>
      <h2 className='panel-title'>
        上傳檔案
      </h2>
    </div>
    <div className='panel-body'>
      <h4>請尊重智慧財產權!</h4>
      <p>
        本區只開放上傳考古題及作業，若上傳非相關檔案或未授權檔案後果請自行負責!<br />
        目前支援的格式有: doc(x)/ppt(x)/pdf/jp(e)g/png/zip/rar<br />
        每個檔案的大小限制為10MB
      </p>
      <div className='checkbox'>
        <label>
          <input type='checkbox' /> 匿名上傳
        </label>
      </div>
      <div className='btn-toolbar'>
        <button className='btn btn-success'>
          <i className='glyphicon glyphicon-plus' />
          <span>新增檔案</span>
          <input type='file' className='hidden' />
        </button>
        <button className='btn btn-primary' >
          <i className='glyphicon glyphicon-arrow-up' />
          <span>開始上傳</span>
        </button>
        <button className='btn btn-warning' >
          <i className='glyphicon glyphicon-remove' />
          <span>取消上傳</span>
        </button>
      </div>
    </div>
  </div>
)

export { PastExamTable, PastExamUpload }
