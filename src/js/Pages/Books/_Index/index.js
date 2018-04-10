
import React from 'react'
import {
  SearchPanel,
  SearchPanelButtonGroup,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed
} from '../../../Components/Search'
import { BooksTable } from '../../../Components/BooksTable'
import { InputWithButton } from '../../../Components/FormUtils'
import './style.scss'

import { connect } from 'react-redux'
import { updateBooksPage, applyBooksFilters } from '../../../Redux/Actions/Books'

const Index = (props) => (
  <div className='page-wrapper books'>
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
                  onClick={() => props.apply_filters({ sort_by: 'price' })}
                  className={props.books.filters.sort_by === 'price' ? 'btn btn-primary' : 'btn btn-default'}
                >
                  價錢
                  {
                    props.books.filters.sort_by === 'price' &&
                    <span onClick={() => props.apply_filters({ descend: !props.books.filters.descend })}>
                      { props.books.filters.descend ? '▼' : '▲' }
                    </span>
                  }
                </button>
                <button
                  onClick={() => props.apply_filters({ sort_by: 'date' })}
                  className={props.books.filters.sort_by === 'date' ? 'btn btn-primary' : 'btn btn-default'}
                >
                  日期
                  {
                    props.books.filters.sort_by === 'date' &&
                    <span onClick={() => props.apply_filters({ descend: !props.books.filters.descend })}>
                      { props.books.filters.descend ? '▼' : '▲' }
                    </span>
                  }
                </button>
              </div>
            </div>
            <SearchPanelCollegeList />
            <SearchPanelNewsFeed >
              {
                props.books.data.length
                ? props.books.data.map((book, index) => (
                  <SearchPanelNews href={`/books/${book.id}`} key={index}>
                    {
                      /* get diff of date */
                      Math.ceil((Date.now() - Date.parse(book.update_time)) / 864000000)
                    }
                    售出了 { book.name }
                  </SearchPanelNews>
                ))
                : <SearchPanelNews href='/books'>沒有書QQ</SearchPanelNews>
              }
            </SearchPanelNewsFeed>
          </SearchPanel>
        </div>
        <div className='col-12 col-md-9'>
          <BooksTable {...props.books} update_page={props.update_page} />
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  books: state.books
})
const mapDispatchToProps = (dispatch) => ({
  apply_filters: (filters) => dispatch(applyBooksFilters(filters)),
  update_page: (page) => dispatch(updateBooksPage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
