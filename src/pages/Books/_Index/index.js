
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Layout from 'pages/Layout'
import {
  SearchPanel,
  SearchPanelButtonGroup,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed
} from 'components/Search'
import * as Books from 'components/Book'
import { InputWithButton } from 'components/FormUtils'
import { toast, ToastWrapper } from 'components/Toast'
import { getBooks, getBooksLatestNews } from 'api/Controllers/books'
import actions from 'api/Actions/Books'
import styles from './style.scss'
import { SidebarWrapper, SidebarPusher } from 'components/Sidebar'

class Index extends React.Component {
  componentDidMount () {
    // 判斷是不是從售出完成後導向過來的
    if (this.props.location.state && this.props.location.state.sell) {
      toast('成功售出!', { type: 'success' })

      // 清除 location state
      this.props.history.replace({
        pathname: '/books/',
        state: {}
      })
    }

    this.props.fetchData({
      page: 1,
      q: {
        sort: {
          order: 'desc',
          by: 'created_at'
        }
      }
    })
    this.props.fetchLatestNews()
  }

  componentDidUpdate (prevProps) {
    let books = this.props.books
    if (books.page !== prevProps.books.page || books.filters !== prevProps.books.filters) {
      this.props.fetchData({
        page: books.page,
        q: {
          sort: {
            order: books.filters.descend ? 'desc' : 'asc',
            by: books.filters.sort_by
          },
          filters: {
            custom_search: books.filters.search_by
          }
        }
      })
      this.props.fetchLatestNews()
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
  }

  componentWillUnmount () {
    this.props.updateFilters({ sort_by: 'created_at' })
    this.props.updateFilters({ descend: true })
    this.props.updateFilters({ search_by: '' })
  }

  render () {
    let filters = this.props.books.filters
    return (
      <Layout>
        <ToastWrapper />
        <SidebarWrapper>
          <SearchPanel>
            <InputWithButton
              placeholder='書名/作者/課名'
              button_style='primary'
              button_content={<i className='fa fa-search' />}
              onClick={(value) => this.props.updateFilters({ search_by: value })}
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
                  className={filters.sort_by === 'price' ? 'btn btn-primary' : 'btn btn-default'}
                >
                  價錢
                  {
                    filters.sort_by === 'price' &&
                    <span onClick={() => this.props.updateFilters({ descend: !filters.descend })}>
                      { filters.descend ? '▼' : '▲' }
                    </span>
                  }
                </button>
                <button
                  onClick={() => this.props.updateFilters({ sort_by: 'created_at' })}
                  className={filters.sort_by === 'created_at' ? 'btn btn-primary' : 'btn btn-default'}
                >
                  日期
                  {
                    filters.sort_by === 'created_at' &&
                    <span onClick={() => this.props.updateFilters({ descend: !filters.descend })}>
                      { filters.descend ? '▼' : '▲' }
                    </span>
                  }
                </button>
              </div>
            </div>
            <SearchPanelCollegeList />
            <SearchPanelNewsFeed >
              {
                // 這裡因為最新動態可能會有同一本書的新增和編輯，所以key不能用book id
                this.props.latestNews.data.map((book, index) => (
                  <SearchPanelNews
                    href={`/books/${book.id}`}
                    status={book.status}
                    clickable={book.status === 0}
                    key={index}
                  >
                    { moment(book.time).fromNow() }
                    { book.status ? '售出了' : '新增了' }
                    { book.name }
                  </SearchPanelNews>
                ))
              }
            </SearchPanelNewsFeed>
          </SearchPanel>
          <SidebarPusher>
            <div className='container pt-3'>
              <Books.Table
                {...this.props.books}
                currentUser={this.props.currentUser}
                updatePage={this.props.updatePage.bind(this)}
              />
            </div>
          </SidebarPusher>
        </SidebarWrapper>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  books: state.books.index,
  latestNews: state.books.latestNews
})
const mapDispatchToProps = (dispatch) => ({
  fetchData: (payload) => dispatch(getBooks(payload)),
  updateFilters: (filters) => dispatch(actions.books.index.updateFilters(filters)),
  updatePage: (page) => dispatch(actions.books.index.updatePage(page)),
  fetchLatestNews: () => dispatch(getBooksLatestNews())
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
