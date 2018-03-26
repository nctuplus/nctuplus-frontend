
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import './style.scss'

const Import = (props) => (
  <div className='page-wrapper score'>
    <div className='container'>
      <Row>
        <Col sm={8} smOffset={2}>
          <div className='border-left-cyan well'>
            <h2><strong>匯入歷年課程</strong></h2>
            <p className='lead'>
              1.  登入交大註冊組 <a href='https://regist.nctu.edu.tw/' target='blank'>學籍成績系統</a><br />
              2.  點選「歷年成績查詢」按鈕 (<a href='/assets/import_course_1-d0fb8c83f8b0a96479abfe6212d7947f.jpg' target='blank'>範例</a>)<br />
              3.  全選 (ctrl+a) 成績內容，並複製貼至下方表單 (<a href='/assets/import_course_2-60a20b1d1d6c47b94ace11b0064be4c2.jpg' target='blank'>範例</a>)<br /></p>
            <p>
              註1：匯入前請將所有課程先清空，有少部分抵免課程、免修課程、聯合大學開授課程無法匯入。<br />
              註2：建議使用 Chrome 或 FireFox，如用 IE 會複製到其他字元造成匯入失敗。<br />
            </p>
          </div>
          <div>
            <textarea className='form-control' placeholder='請將複製內容貼於此...' rows='10' />
            <div className='submit-btn pull-right'>
              <Button bsStyle='primary'>立即匯入</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
)

export default Import
