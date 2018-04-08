
import React from 'react'
import './style.scss'

const Show = (props) => (
  <div className='page-wrapper book-detail'>
    <div className='container'>
      <div className='row bg-white'>
        <div className='col-12 col-md-11 offset-md-1'>
          <div className='row'>
            <div className='col-12 col-md-3 offset-md-1'>
              <img className='img-preview' alt='尚無圖片!' src='https://plus.nctu.edu.tw/file_upload/book_covers/000/001/432/IMG_20170921_151626.jpg?1506278647' />
            </div>
            <div className='col-8'>
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
                      【2017交大資工系學會二手書合作計畫】<br />
      如欲購買二手書請連絡交大資工系學會粉專，請勿直接私訊賣家，感謝配合。 <br />
      交大資工系學會粉絲專頁：https://www.facebook.com/nctucs.assoc/ <br />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Show
