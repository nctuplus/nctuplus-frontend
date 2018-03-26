
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { LabeledInput } from '../../../Components/FormUtils'

const Edit = (props) => (
  <div className='container bg-white edit'>
    <LabeledInput label={<h4>分享課表</h4>} />
    <LabeledInput label={<h4>姓名</h4>} >
      <input className='form-control' />
    </LabeledInput>
    <LabeledInput label={<h4>信箱</h4>} >
      <input className='form-control' />
    </LabeledInput>
    <div className='form-group'>
      <Row>
        <label className='col-sm-2 text-right'><h4>入學年度</h4></label>
        <Col md={2}>
          <select className='form-control'>
            <option value=''>請選擇</option>
            <option value='99'>99</option>
          </select>
        </Col>
      </Row>
    </div>

    <div className='form-group'>
      <Row>
        <label className='col-sm-2 text-right'><h4>系所</h4></label>
        <Col md={2} className='no-margin'>
          <select className='form-control' >
            <option value='3'>大學部</option>
          </select>
        </Col>
        <Col md={5}>
          <select className='form-control' >
            <option value=''>請選擇</option>
            <option value='260'>奈米學士班</option>
          </select>
          <select className='form-control hidden' >
            <option value=''>請選擇</option>
            <option value='73'>加速器光源科技與應用碩士學位學程</option>
          </select>
        </Col>
      </Row>
    </div>

    <div className='form-group'>
      <Col md={1} mdOffset={10}>
        <Button bsStyle='primary' className='pull-right'>送出</Button>
      </Col>
    </div>
  </div>
)

export default Edit
