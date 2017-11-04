
import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Button, ButtonGroup } from 'react-bootstrap'
import {
  SearchPanel,
  SearchPanelButtonGroup,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed
} from '../../Components/Search'
import { BooksTable, BooksTableItem } from '../../Components/BooksTable'
import { InputWithButton } from '../../Components/FormUtils'

import { connect } from 'react-redux'
import { applyBooksFilter } from '../../Redux/Actions'

const sold_books = [
  {
    id: 123,
    name: 'Pathways (3A): Listening, speaking & critical thinking',
    sold_time: '1小時前'
  },
  {
    id: 123,
    name: 'Pathways (3A): Listening, speaking & critical thinking',
    sold_time: '1小時前'
  },
  {
    id: 123,
    name: 'Pathways (3A): Listening, speaking & critical thinking',
    sold_time: '1小時前'
  },
  {
    id: 123,
    name: 'Pathways (3A): Listening, speaking & critical thinking',
    sold_time: '1小時前'
  },
  {
    id: 123,
    name: 'Pathways (3A): Listening, speaking & critical thinking',
    sold_time: '1小時前'
  },
  {
    id: 123,
    name: 'Pathways (3A): Listening, speaking & critical thinking',
    sold_time: '1小時前'
  },
  {
    id: 123,
    name: 'Pathways (3A): Listening, speaking & critical thinking',
    sold_time: '1小時前'
  },
  {
    id: 123,
    name: 'Pathways (3A): Listening, speaking & critical thinking',
    sold_time: '1小時前'
  },
  {
    id: 123,
    name: 'Pathways (3A): Listening, speaking & critical thinking',
    sold_time: '1小時前'
  }
]
const books = [
  {
    id: 123,
    book_name: 'University Chemistry',
    author: 'Brian B.Liard',
    course: '化學 (一)',
    teacher: '李大偉',
    date: '2017/09/20 16:59',
    preview_img: 'https://plus.nctu.edu.tw/file_upload/book_covers/000/001/425/41B0GFp5UTL._SX397_BO1_204_203_200_.jpg?1505897988',
    price: 800
  },
  {
    id: 123,
    book_name: 'University Chemistry',
    author: 'Brian B.Liard',
    course: '化學 (一)',
    teacher: '李大偉',
    date: '2017/09/20 16:59',
    preview_img: 'https://plus.nctu.edu.tw/file_upload/book_covers/000/001/425/41B0GFp5UTL._SX397_BO1_204_203_200_.jpg?1505897988',
    price: 800
  },
  {
    id: 123,
    book_name: 'University Chemistry',
    author: 'Brian B.Liard',
    course: '化學 (一)',
    teacher: '李大偉',
    date: '2017/09/20 16:59',
    preview_img: 'https://plus.nctu.edu.tw/file_upload/book_covers/000/001/425/41B0GFp5UTL._SX397_BO1_204_203_200_.jpg?1505897988',
    price: 800
  },
  {
    id: 123,
    book_name: 'University Chemistry',
    author: 'Brian B.Liard',
    course: '化學 (一)',
    teacher: '李大偉',
    date: '2017/09/20 16:59',
    preview_img: 'https://plus.nctu.edu.tw/file_upload/book_covers/000/001/425/41B0GFp5UTL._SX397_BO1_204_203_200_.jpg?1505897988',
    price: 800
  },
  {
    id: 123,
    book_name: 'University Chemistry',
    author: 'Brian B.Liard',
    course: '化學 (一)',
    teacher: '李大偉',
    date: '2017/09/20 16:59',
    preview_img: 'https://plus.nctu.edu.tw/file_upload/book_covers/000/001/425/41B0GFp5UTL._SX397_BO1_204_203_200_.jpg?1505897988',
    price: 800
  },
  {
    id: 123,
    book_name: 'University Chemistry',
    author: 'Brian B.Liard',
    course: '化學 (一)',
    teacher: '李大偉',
    date: '2017/09/20 16:59',
    preview_img: 'https://plus.nctu.edu.tw/file_upload/book_covers/000/001/425/41B0GFp5UTL._SX397_BO1_204_203_200_.jpg?1505897988',
    price: 800
  },
]

const _Book = (props) => (
  <div className='page-wrapper books'>
    <div className='container'>
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
        <Row className='text-center filter' >
          <h4 className='text-center search-panel-title'>排序</h4>
          <ButtonGroup className='filter-group' >
            <Button 
              onClick={ () => props.applyFilter({sort_by: 'price'}) }
              bsStyle={ props.filter.sort_by === 'price' ? 'primary' : 'default'}
            >
              價錢 
              { 
                props.filter.sort_by === 'price' 
                ? <span onClick={() => props.applyFilter({'descend': !props.filter.descend})}>
                    { props.filter.descend ? '▼' : '▲' }
                  </span> : '' 
              }
            </Button>
            <Button 
              onClick={ () => props.applyFilter({'sort_by': 'date'}) }
              bsStyle={ props.filter.sort_by === 'date' ? 'primary' : 'default'}
            >
              日期 
              { 
                props.filter.sort_by === 'date' 
                ? <span onClick={() => props.applyFilter({'descend': !props.filter.descend})}>
                    { props.filter.descend ? '▼' : '▲' }
                  </span> : '' 
              }
            </Button>
          </ButtonGroup>
        </Row>
        <SearchPanelCollegeList />
        <SearchPanelNewsFeed >
          {
            sold_books.map((book, index) => (
              <SearchPanelNews href={'/books/' + book.id} key={index}>
                { book.sold_time } 售出了 { book.name }
              </SearchPanelNews>
            ))
          }
        </SearchPanelNewsFeed>
      </SearchPanel>
      <BooksTable books={ books } />
    </div>
  </div>
)

const mapStateToProps = (state) => ({ filter: state.book.filter })
const mapDispatchToProps = (dispatch) => ({ 
  applyFilter: (filt) => dispatch(applyBooksFilter(filt)) 
})

const Book = connect(mapStateToProps, mapDispatchToProps)(_Book)

export default Book
