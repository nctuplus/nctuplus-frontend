
import React from 'react'
import Layout from 'pages/Layout'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { getBook } from 'api/Controllers/books'
import style from './style.scss'

class Show extends React.Component {
  componentDidMount () {
    this.props.getBook(this.props.match.params.id)
  }

  render () {
    let book = this.props.book

    return (
      <Layout>
        <div className='container'>
          <div className='row bg-white'>
            <div className='col-10 offset-1'>
              <div className='row'>
                <div className='col-12 col-md-5 col-lg-4 pt-3'>
                  <img
                    className='img-preview img-fluid'
                    alt='尚無圖片!'
                    src={book.cover_image && `${SERVER_URL}${book.cover_image.url}`}
                  />
                </div>
                <div className='col-12 col-md-7 col-lg-8'>
                  <table className='table'>
                    <tbody>
                      <tr>
                        <td colSpan='2' className='col-md-12'>
                          <h4><strong>{ book.name }</strong></h4>
                          by { book.authors }
                        </td>
                      </tr>
                      <tr>
                        <td>價格</td>
                        <td><span className='price'>{ book.price }</span></td>
                      </tr>
                      <tr>
                        <td>賣家</td>
                        <td>{ book.user && book.user.name }</td>
                      </tr>
                      <tr>
                        <td>連絡方式</td>
                        <td>
                          {
                            book.contact_way && book.contact_way.includes('@')
                              ? book.contact_way
                              : <a href={book.contact_way}>Facebook</a>
                          }
                        </td>
                      </tr>
                      <tr>
                        <td>書況</td>
                        <td className='line-break'>{ book.info }</td>
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
                        <td>
                          {
                            book.courses &&
                            book.courses.map((course, index) =>
                              <div key={index}>{course.course_name}</div>
                            )
                          }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {
            book.sold_at === null
              ? <div className='row'>
                <div className={style.fixedMenu}>
                  <div className='pull-right'>
                    <Link to={`/books/${this.props.match.params.id}/edit`} className='flat-link'>
                      <button className='btn btn-primary'>
                        編輯
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              : ''
          }
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  book: state.books.show.data,
  status: state.books.show.status
})

const mapDispatchToProps = (dispatch) => ({
  getBook: (id) => dispatch(getBook(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show))
