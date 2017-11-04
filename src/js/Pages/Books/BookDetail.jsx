
import React from 'react'

import { Row, Col } from 'react-bootstrap'

const BookDetail = (props) => (
  <div className='page-wrapper book-detail'>
    <div className='container'>
      <Row className='bg-white'>
        <Col md={11} mdOffset={1} xs={12} sm={12}>
          <Row>
            <Col md={3} xs={12} sm={12}>
              <img className='img-preview' alt='尚無圖片!' src='https://plus.nctu.edu.tw/file_upload/book_covers/000/001/432/IMG_20170921_151626.jpg?1506278647' />
            </Col>
            <Col md={8}>
              <table className='table'>
                <tbody>
                  <tr>
                    <td colSpan='2' className='col-md-12'>
                      <h4><strong>Elementary Differential Equations with Boundary Value Problems Sixth Edition</strong></h4>
                      by C.H. Edwards and D.E. Penny
                    </td>
                  </tr>
                  <tr>
                    <td>價格</td>
                    <td>
                      <span className='price'>450</span>
                    </td>
                  </tr>
                  <tr>
                    <td>賣家</td>
                    <td>王立洋</td>
                  </tr>
                  <tr>
                    <td>連絡方式</td>
                    <td><a href='https://www.facebook.com/1054643771220607'>Facebook</a></td>
                  </tr>
                  <tr>
                    <td>書況</td>
                    <td className='line-break'>
                      【2017交大資工系學會二手書合作計畫】{'\n'}
      如欲購買二手書請連絡交大資工系學會粉專，請勿直接私訊賣家，感謝配合。{'\n'}
      交大資工系學會粉絲專頁：https://www.facebook.com/nctucs.assoc/{'\n'}
      ———書況：基本上沒什麼筆記在上面
                    </td>
                  </tr>
                  <tr>
                    <td>觀看次數</td>
                    <td>21</td>
                  </tr>
                  <tr>
                    <td>ISBN</td>
                    <td>9780132358811</td>
                  </tr>
                  <tr>
                    <td>適用課程</td>
                    <td />
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </div>
)

export default BookDetail
