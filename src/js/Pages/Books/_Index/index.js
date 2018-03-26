
import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Button, ButtonGroup } from 'react-bootstrap'
import {
  SearchPanel,
  SearchPanelButtonGroup,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed
} from '../../../Components/Search'
import { BooksTable, BooksTableItem } from '../../../Components/BooksTable'
import { InputWithButton } from '../../../Components/FormUtils'
import './style.scss'

import { connect } from 'react-redux'
import { update_books_page, apply_books_filters } from '../../../Redux/Actions/Books'

const Index = (props) => (
  <div className='page-wrapper books'>
    <div className='container'>
      <SearchPanel>
        <InputWithButton
          placeholder='書名/作者/課名'
          button_style='primary'
          button_content={ <i className='fa fa-search' /> }
        />
        <SearchPanelButtonGroup
          new_title='新增商品'
          new_link='/books/new'
          new_btn_type='success'
          mine_title='我的商品'
          mine_link='/books/?mine=true'
          mine_btn_type='info'
        />
        <Row className='text-center filter' >
          <h4 className='text-center search-panel-title'>排序</h4>
          <ButtonGroup className='filter-group' >
            <Button
              onClick={() => props.apply_filters({ sort_by: 'price' })}
              bsStyle={props.filters.sort_by === 'price' ? 'primary' : 'default'}
            >
              價錢
              {
                props.filters.sort_by === 'price'
                ? <span onClick={() => props.apply_filters({ descend: !props.filters.descend })}>
                  { props.filters.descend ? '▼' : '▲' }
                </span>
                : ''
              }
            </Button>
            <Button
              onClick={() => props.apply_filters({ sort_by: 'date' })}
              bsStyle={props.filters.sort_by === 'date' ? 'primary' : 'default'}
            >
              日期
              {
                props.filters.sort_by === 'date'
                ? <span onClick={() => props.apply_filters({ descend: !props.filters.descend })}>
                  { props.filters.descend ? '▼' : '▲' }
                </span>
                : ''
              }
            </Button>
          </ButtonGroup>
        </Row>
        <SearchPanelCollegeList />
        <SearchPanelNewsFeed >
          {
            props.sold_books.map((book, index) => (
              <SearchPanelNews href={`/books/${book.id}`} key={index}>
                { book.sold_time } 售出了 { book.name }
              </SearchPanelNews>
            ))
          }
        </SearchPanelNewsFeed>
      </SearchPanel>
      <BooksTable {...props.books_table} update_page={props.update_page} />
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  filters: state.books.filters,
  status: state.books.status,
  sold_books: state.books.data.sold_books,
  books_table: {
    page: state.books.page,
    max_page: state.books.max_page,
    books: state.books.data.books
  }
})
const mapDispatchToProps = (dispatch) => ({
  apply_filters: (filters) => dispatch(apply_books_filters(filters)),
  update_page: (page) => dispatch(update_books_page(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
