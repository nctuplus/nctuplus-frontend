
import React from 'react'
import { Row, Col, Button, FormGroup } from 'react-bootstrap'
import { LabeledInput } from '../../../Components/FormUtils'
import CKEditor from 'react-ckeditor-component'
import './style.scss'

class Edit extends React.Component {
  render () {
    return (
      <div className='page-wrapper edit-event'>
        <div className='container bg-white'>
          <Row>
            <Col md={9} mdOffset={1}>
              <Col mdOffset={1} className='title'>
                新增活動
              </Col>
              <LabeledInput label='圖片'>
                <input accept='image/*' className='hidden' type='file' />
                <div className='text-center clickable upload-picture' >
                    點選以上傳,建議800x400以達最佳效果(需小於2MB)
                </div>
              </LabeledInput>
              <LabeledInput label='類型/名稱'>
                <div className='input-group'>
                  <div className='input-group-btn'>
                    <select className='btn' >
                      <option value=''>類型</option>
                      <option value='校友週'>校友週</option>
                      <option value='講座'>講座</option>
                      <option value='表演'>表演</option>
                      <option value='擺攤'>擺攤</option>
                      <option value='比賽'>比賽</option>
                      <option value='其他'>其他</option>
                    </select>
                  </div>
                  <input className='form-control' placeholder='必填' type='text' />
                </div>
              </LabeledInput>
              <LabeledInput label='活動網址'>
                <input className='form-control' placeholder='選填' type='text' />
              </LabeledInput>
              <FormGroup>
                <Row>
                  <label className='col-sm-2 control-label text-right'>主辦單位</label>
                  <Col sm={4}>
                    <input className='form-control' placeholder='選填' type='text' />
                  </Col>
                  <label className='col-sm-2 control-label text-right'>地點</label>
                  <Col sm={4}>
                    <input className='form-control' placeholder='選填' type='text' />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <label className='col-sm-2 control-label text-right'>開始時間</label>
                  <Col sm={4}>
                    <input className='form-control' placeholder='選填' type='text' />
                  </Col>
                  <label className='col-sm-2 control-label text-right'>結束時間</label>
                  <Col sm={4}>
                    <input className='form-control' placeholder='選填' type='text' />
                  </Col>
                </Row>
              </FormGroup>
              <LabeledInput label='內容'>
                <CKEditor activeClass='p10' />
              </LabeledInput>
              <Col md={12} className='text-right'>
                <Button bsSize='large' bsStyle='success'>送出</Button>
              </Col>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Edit
