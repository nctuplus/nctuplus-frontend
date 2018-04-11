
import React from 'react'
import './style.scss'

import { connect } from 'react-redux'
import { getBook } from '../../../Redux/Actions/Books'

const Show = ({ match, book, status, get_book, ...props }) => {
  status || get_book(match.params.id)
  return (
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
                        <h4><strong>{ book.name }</strong></h4>
                        by { book.author }
                      </td>
                    </tr>
                    <tr>
                      <td>價格</td>
                      <td><span className='price'>{ book.price }</span></td>
                    </tr>
                    <tr>
                      <td>賣家</td>
                      <td>{ book.seller && book.seller.name }</td>
                    </tr>
                    <tr>
                      <td>連絡方式</td>
                      <td><a href='#'>Facebook</a></td>
                    </tr>
                    <tr>
                      <td>書況</td>
                      <td className='line-break'>{ book.description }</td>
                    </tr>
                    <tr>
                      <td>觀看次數</td>
                      <td>{ book.view_count }</td>
                    </tr>
                    <tr>
                      <td>ISBN</td>
                      <td>{ book.isbn }</td>
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
}

const mapStateToProps = (state) => ({
  book: state.books.show.data,
  status: state.books.show.status
})

const mapDispatchToProps = (dispatch) => ({
  get_book: (id) => dispatch(getBook(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Show)
