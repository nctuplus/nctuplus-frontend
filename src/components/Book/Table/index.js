
import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Pagination from 'components/Pagination'
import styles from './style.scss'

const Item = withRouter((props) => {
  return (
    <div className='col-sm-6 col-md-4 mb-3' onClick={() => props.history.push(`/books/${props.id}`)}>
      <div className={`${styles.bookItem} card clickable`} >
        <div className='p-1'>
          {
            props.status === 0
              ? <div style={{ position: 'absolute' }}>
                <Link to={`/books/${props.id}/edit`} onClick={(e) => e.stopPropagation()}>
                  <button className='btn btn-warning btn-sm'><i className='fa fa-pencil' /></button>
                </Link>
              </div>
              : ''
          }
          <div className='text-center'>
            <img
              className='d-inline-block'
              alt='尚無圖片!'
              height='150'
              src={`${SERVER_URL}${props.cover_image.url}`}
            />
          </div>
        </div>
        <div className='card-body text-center'>
          <div className='ellipsis'>{props.name}</div>
          <div className='ellipsis'>作者: {props.authors}</div>
          <div className='ellipsis'>
            課程: {
              props.courses &&
              props.courses
                .map(course => course.course_name)
                .join(', ')
            }
          </div>
        </div>

        <div className='card-footer mt-1 p-2' >
          <span>{props.created_at.slice(0, 10)}</span>
          <span className={`pull-right bold ${styles.price}`}>
            <i className='fa fa-dollar' />{ props.price }
          </span>
        </div>
      </div>
    </div>
  )
})

const Table = (props) => (
  <div>
    <div className='row'>
      { props.data.map(book => (<Item key={book.id} {...book} />)) }
    </div>
    <div className='text-center'>
      <Pagination page={props.page} maxPage={props.maxPage} to={props.updatePage} />
    </div>
  </div>
)

export default Table
