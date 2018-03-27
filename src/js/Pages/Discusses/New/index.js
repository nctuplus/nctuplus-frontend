
import React from 'react'
import { PersonalRatingBar } from '../../../Components/Ratings'
import { Row, Col, Button } from 'react-bootstrap'

class New extends React.Component {
  render () {
    return (
      <div className='discuss-detail page-wrapper'>
        <div className='container bg-white'>
          <Row>
            <Col md={9} mdOffset={1}>
              <h1>新增文章</h1>

              <h4>Step1.選擇適用課程 - <span className='text-center' >/</span></h4>
              <Row className='form-group'>
                <label className='col-sm-2 text-right'>適用課程</label>
                <Col md={10}>
                  <div className='input-group'>
                    <input className='form-control' placeholder='搜尋課名（交大專用）' />
                    <span className='input-group-btn'>
                      <Button>搜尋</Button>
                    </span>
                  </div>
                </Col>
              </Row>

              <hr />

              <h4>Step2.輸入標題以及內容</h4>
              <Row className='form-group'>
                <label className='col-sm-2 text-right'>標題</label>
                <Col sm={10}>
                  <input className='form-control' type='text' />
                </Col>
              </Row>
              <Row className='form-group'>
                <label className='col-sm-2 text-right'>內容</label>
                <Col sm={10}>
                  <textarea className='form-control' rows='10' />
                </Col>
              </Row>
              <Col mdOffset={2}>
                <PersonalRatingBar>涼度</PersonalRatingBar>
                <PersonalRatingBar>甜度</PersonalRatingBar>
                <PersonalRatingBar>深度</PersonalRatingBar>
              </Col>
              <Col md={12} className='text-right'>
                <div className='checkbox inline-block'>
                  <label>
                    <input type='checkbox' /> 匿名
                  </label>
                </div>
                <Button bsStyle='success' bsSize='large'>預覽</Button>
                <Button bsStyle='primary' bsSize='large'>送出</Button>
              </Col>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default New
