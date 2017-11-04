
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { Pagination } from './Pagination'

const _BooksTableItem = (props) => {
  return (
    <Col md={4} sm={6} onClick={ () => props.history.push(`/books/${ props.id }`) }>
      <div className='thumbnail clickable table-item' >
        <img alt='尚無圖片!' className='img-preview' src={ props.preview_img } />

        <div className='intro'>
          <div className='text-center'>
            <span className='title block'>{props.book_name}</span>
            <span className='title block'>{props.author}</span>
            <span className='block'>課程: {props.course}</span>
            <span className='block'>老師: {props.teacher}</span>
          </div>
        </div>

        <div className='supplemental-info' >
          <span className='date'>{props.date}</span>
          <span className='pull-right bold price'>
            <i className='fa fa-dollar' />{ props.price }
          </span>
        </div>
      </div>
    </Col>
  )
}

const BooksTable = (props) => (
  <Col md={9}>
    <Row>
      {
        props.books.map((book, index) => (
          <BooksTableItem
            key={index}
            {...book}
          />
        ))
      }
    </Row>
    <Row className='text-center'>
      <BooksPagination/>
    </Row>
  </Col>
)
const BooksTableItem = withRouter(_BooksTableItem)

export { BooksTable, BooksTableItem }
