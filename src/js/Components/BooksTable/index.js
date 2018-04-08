
import React from 'react'
import { withRouter } from 'react-router-dom'
import Pagination from '../Pagination'
import './style.scss'

const BooksTableItem = withRouter((props) => {
  return (
    <div className='col-4 col-md-4 mb-3' onClick={() => props.history.push(`/books/${props.id}`)}>
      <div className='book-table-item clickable p-3' >
        <div className='text-center'>
          <img className='d-inline-block' alt='尚無圖片!' height='150' src={props.preview_img} />
        </div>
        <div className='intro mb-4'>
          <div className='text-center'>
            <span className='title d-block'>{props.book_name}</span>
            <span className='title d-block'>{props.author}</span>
            <span className='d-block'>課程: {props.course}</span>
            <span className='d-block'>老師: {props.teacher}</span>
          </div>
        </div>

        <div className='supplemental-info mt-1 p-2' >
          <span className='date'>{props.date}</span>
          <span className='pull-right bold price'>
            <i className='fa fa-dollar' />{ props.price }
          </span>
        </div>
      </div>
    </div>
  )
})

const BooksTable = (props) => (
  <div>
    <div className='row'>
      {
        props.books.map((book, index) => (
          <BooksTableItem
            key={index}
            {...book}
          />
        ))
      }
    </div>
    <div className='text-center'>
      <Pagination page={props.page} max_page={props.max_page} to={props.update_page} />
    </div>
  </div>
)

export { BooksTable, BooksTableItem }
