
import React from 'react'
import {
  SearchPanel,
  SearchPanelButtonGroup,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed
} from 'components/Search'
import Layout from 'pages/Layout'
import * as Books from 'components/Book'
import { InputWithButton } from 'components/FormUtils'
import moment from 'moment'
import styles from './style.scss'

import { connect } from 'react-redux'
import { getBooks } from 'api/Controllers/books'
import actions from 'api/Actions/Books'

class Index extends React.Component {
  componentDidMount () {
    this.props.fetchData({
      page: this.props.books.page,
      q: {
        sort: {
          order: this.props.books.filters.descend ? 'desc' : 'asc',
          by: this.props.books.filters.sort_by
        }
      }
    })
  }

  componentDidUpdate (prevProps) {
    if (this.props.books.page !== prevProps.books.page || this.props.books.filters !== prevProps.books.filters) {
      this.props.fetchData({
        page: this.props.books.page,
        q: {
          sort: {
            order: this.props.books.filters.descend ? 'desc' : 'asc',
            by: this.props.books.filters.sort_by
          }
        }
      })
    }
  }

  componentWillUnmount () {
    this.props.updatePage(1)
  }

  render () {
    return (
      <Layout>
        <div className='container pt-3'>
          <div className='row'>
            <div className='col-12 col-md-3 pl-0'>
              <SearchPanel>
                <InputWithButton
                  placeholder='書名/作者/課名'
                  button_style='primary'
                  button_content={<i className='fa fa-search' />}
                />
                <SearchPanelButtonGroup
                  new_title='新增商品'
                  new_link='/books/new'
                  new_btn_type='success'
                  mine_title='我的商品'
                  mine_link='/books/?mine=true'
                  mine_btn_type='info'
                />
                <div className={`text-center ${styles.filter}`} >
                  <h4 className='text-center search-panel-title'>排序</h4>
                  <div className={`btn-group ${styles.filterGroup}`} >
                    <button
                      onClick={() => this.props.updateFilters({ sort_by: 'price' })}
                      className={this.props.books.filters.sort_by === 'price' ? 'btn btn-primary' : 'btn btn-default'}
                    >
                      價錢
                      {
                        this.props.books.filters.sort_by === 'price' &&
                        <span onClick={() => this.props.updateFilters({ descend: !this.props.books.filters.descend })}>
                          { this.props.books.filters.descend ? '▼' : '▲' }
                        </span>
                      }
                    </button>
                    <button
                      onClick={() => this.props.updateFilters({ sort_by: 'created_at' })}
                      className={this.props.books.filters.sort_by === 'created_at' ? 'btn btn-primary' : 'btn btn-default'}
                    >
                      日期
                      {
                        this.props.books.filters.sort_by === 'created_at' &&
                        <span onClick={() => this.props.updateFilters({ descend: !this.props.books.filters.descend })}>
                          { this.props.books.filters.descend ? '▼' : '▲' }
                        </span>
                      }
                    </button>
                  </div>
                </div>
                <SearchPanelCollegeList />
                <SearchPanelNewsFeed >
                  {
                    this.props.books.data.slice(0, 10).map((book, index) => (
                      <SearchPanelNews href={`/books/${book.id}`} key={index}>
                        { moment(book.updated_at).fromNow() } 售出了 { book.name }
                      </SearchPanelNews>
                    ))
                  }
                </SearchPanelNewsFeed>
              </SearchPanel>
            </div>
            <div className='col-12 col-md-9'>
              <Books.Table {...this.props.books} updatePage={this.props.updatePage.bind(this)} />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books.index
})
const mapDispatchToProps = (dispatch) => ({
  fetchData: (payload) => dispatch(getBooks(payload)),
  updateFilters: (filters) => dispatch(actions.books.index.updateFilters(filters)),
  updatePage: (page) => dispatch(actions.books.index.updatePage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
