
import React from 'react'
import { PastExamTable, PastExamUpload } from '../../../Components/PastExamUpload'

class Upload extends React.Component {
  render () {
    return (
      <div className='page-wrapper upload-exam'>
        <div className='container bg-white'>
          <div className='row'>
            <div className='col-12'>
              <h4>Step1.選擇適用課程 - <span className='text-center' /></h4>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label className='col-sm-2 control-label'>適用課程</label>
                    <div className='col-md-10'>
                      <div className='input-group '>
                        <input className='form-control' placeholder='搜尋課名（交大專用）' />
                        <span className='input-group-btn'>
                          <button className='btn btn-default'>搜尋</button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className='row'>
                <div className='col-md-12'>
                  <h4>Step2.上傳檔案及填寫說明</h4>
                  <PastExamTable />
                  <PastExamUpload />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Upload
