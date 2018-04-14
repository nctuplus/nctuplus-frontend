
import React from 'react'
import { withRouter } from 'react-router-dom'
import Pagination from '../Pagination'
import './style.scss'

const BooksTableItem = withRouter((props) => {
  return (
    <div className='col-4 col-md-4 mb-3' onClick={() => props.history.push(`/books/${props.id}`)}>
      <div className='card clickable' >
        <div className='text-center'>
          <img className='d-inline-block' alt='尚無圖片!' height='150' src={props.preview_img} />
        </div>
        <div className='card-body text-center'>
          <div>{props.name}</div>
          <div>{props.author}</div>
          <div>課程: {props.course}</div>
          <div>老師: {props.teacher}</div>
        </div>

        <div className='card-footer mt-1 p-2' >
          <span>{props.updated_at}</span>
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
        props.data.map((book, index) => (
          <BooksTableItem
            key={index}
            {...book}
          />
        ))
      }
    </div>
    <div className='text-center'>
      <Pagination page={props.page} maxPage={props.maxPage} to={props.update_page} />
    </div>
  </div>
)

export { BooksTable, BooksTableItem }
