
import React from 'react'
import PageWrapper from '../../../Components/PageWrapper'
import './style.scss'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getBook } from '../../../Redux/Actions/Books'

class Show extends React.Component {
  componentDidMount () {
    this.props.getBook(this.props.match.params.id)
  }

  render () {
    return (
      <PageWrapper>
        <div className='container'>
          <div className='row bg-white'>
            <div className='col-12 col-md-11 offset-md-1'>
              <div className='row'>
                <div className='col-12 col-md-3 offset-md-1'>
                  <img
                    className='img-preview'
                    alt='尚無圖片!'
                    width='100%'
                    src={this.props.book.poster}
                  />
                </div>
                <div className='col-8'>
                  <table className='table'>
                    <tbody>
                      <tr>
                        <td colSpan='2' className='col-md-12'>
                          <h4><strong>{ this.props.book.name }</strong></h4>
                          by { this.props.book.authors }
                        </td>
                      </tr>
                      <tr>
                        <td>價格</td>
                        <td><span className='price'>{ this.props.book.price }</span></td>
                      </tr>
                      <tr>
                        <td>賣家</td>
                        <td>{ this.props.book.seller && this.props.book.seller.name }</td>
                      </tr>
                      <tr>
                        <td>連絡方式</td>
                        <td><a href='#'>Facebook</a></td>
                      </tr>
                      <tr>
                        <td>書況</td>
                        <td className='line-break'>{ this.props.book.description }</td>
                      </tr>
                      <tr>
                        <td>觀看次數</td>
                        <td>{ this.props.book.view_count }</td>
                      </tr>
                      <tr>
                        <td>ISBN</td>
                        <td>{ this.props.book.isbn }</td>
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
      </PageWrapper>
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
