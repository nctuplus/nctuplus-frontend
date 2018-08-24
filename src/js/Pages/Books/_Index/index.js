
import React from 'react'
import {
  SearchPanel,
  SearchPanelButtonGroup,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed
} from '../../../Components/Search'
import PageWrapper from '../../../Components/PageWrapper'
import { BooksTable } from '../../../Components/Book/BooksTable'
import { InputWithButton } from '../../../Components/FormUtils'
import './style.scss'

import { connect } from 'react-redux'
import { updateBooksPage, applyBooksFilters, fetchBooks } from '../../../Redux/Actions/Books'

class Index extends React.Component {
  componentDidMount () {
    this.props.fetchData()
  }

  render () {
    return (
      <PageWrapper>
        <div className='container pt-3'>
          <div className='row'>
            <div className='col-12 col-md-3'>
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
                <div className='text-center filter' >
                  <h4 className='text-center search-panel-title'>排序</h4>
                  <div className='btn-group filter-group' >
                    <button
                      onClick={() => this.props.applyFilters({ sort_by: 'price' })}
                      className={this.props.books.filters.sort_by === 'price' ? 'btn btn-primary' : 'btn btn-default'}
                    >
                      價錢
                      {
                        this.props.books.filters.sort_by === 'price' &&
                        <span onClick={() => this.props.applyFilters({ descend: !this.props.books.filters.descend })}>
                          { this.props.books.filters.descend ? '▼' : '▲' }
                        </span>
                      }
                    </button>
                    <button
                      onClick={() => this.props.applyFilters({ sort_by: 'date' })}
                      className={this.props.books.filters.sort_by === 'date' ? 'btn btn-primary' : 'btn btn-default'}
                    >
                      日期
                      {
                        this.props.books.filters.sort_by === 'date' &&
                        <span onClick={() => this.props.applyFilters({ descend: !this.props.books.filters.descend })}>
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
                        {
                          /* get diff of date */
                          Math.ceil((Date.now() - Date.parse(book.updated_at)) / 864000000)
                        }
                        天前 售出了 { book.name }
                      </SearchPanelNews>
                    ))
                  }
                </SearchPanelNewsFeed>
              </SearchPanel>
            </div>
            <div className='col-12 col-md-9'>
              <BooksTable {...this.props.books} update_page={this.props.updatePage} />
            </div>
          </div>
        </div>
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books.all
})
const mapDispatchToProps = (dispatch) => ({
  fetchData: (page) => dispatch(fetchBooks(page)),
  applyFilters: (filters) => dispatch(applyBooksFilters(filters)),
  updatePage: (page) => dispatch(updateBooksPage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
