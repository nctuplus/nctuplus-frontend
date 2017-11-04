
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { PastExamTable, PastExamUpload } from '../../Components/PastExamUpload'

class UploadPastExam extends React.Component {
  render () {
    return (
      <div className='page-wrapper upload-exam'>
        <div className='container bg-white'>
          <Row>
            <Col md={12} sm={12} xs={12}>
              <h4>Step1.選擇適用課程 - <span className='text-center' /></h4>
              <Row>
                <Col md={6}>
                  <div className='form-group'>
                    <label className='col-sm-2 control-label'>適用課程</label>
                    <Col md={10}>
                      <div className='input-group '>
                        <input className='form-control' placeholder='搜尋課名（交大專用）' />
                        <span className='input-group-btn'>
                          <Button >搜尋</Button>
                        </span>
                      </div>
                    </Col>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col md={12}>
                  <h4>Step2.上傳檔案及填寫說明</h4>
                  <PastExamTable />
                  <PastExamUpload />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default UploadPastExam
